import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const PORT = 3000;
const LEADS_FILE = path.join(process.cwd(), "leads.json");
const CONFIG_FILE = path.join(process.cwd(), "config.json");

// Helper to read JSON safely
function readJson(file: string, defaultData: any) {
  try {
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, "utf8"));
    }
  } catch (e) {
    console.error("Error reading file:", file, e);
  }
  return defaultData;
}

// Helper to write JSON safely
function writeJson(file: string, data: any) {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (e) {
    console.error("Error writing file:", file, e);
    return false;
  }
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // Submit Lead endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const { name, whatsapp, examInterest } = req.body;
      if (!name || !whatsapp) {
        return res.status(400).json({ error: "Name and WhatsApp number are required" });
      }

      const newLead = {
        id: "lead_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
        name: name.trim(),
        whatsapp: whatsapp.trim(),
        examInterest,
        timestamp: new Date().toISOString(),
        status: "Pending",
      };

      // Save lead locally to leads.json
      const leads = readJson(LEADS_FILE, []);
      leads.unshift(newLead);
      writeJson(LEADS_FILE, leads);

      // Check if Google Sheet Web App is configured
      const config = readJson(CONFIG_FILE, { googleSheetUrl: "https://script.google.com/macros/s/AKfycby-23gdlNE4Nc8xi-HcTRM0LpPtFBzA3HE29dND6ZPpiIbu-zmICJWuNE__vUTaXvQ45A/exec" });
      let sheetStatus = "not_configured";
      let sheetMessage = "Google Sheet not configured. Lead stored locally.";

      // Support fallback if URL is empty string in config file
      const finalUrl = (config.googleSheetUrl && config.googleSheetUrl.trim() !== "") 
        ? config.googleSheetUrl 
        : "https://script.google.com/macros/s/AKfycby-23gdlNE4Nc8xi-HcTRM0LpPtFBzA3HE29dND6ZPpiIbu-zmICJWuNE__vUTaXvQ45A/exec";

      if (finalUrl) {
        try {
          // Forward to Google Sheet Web App
          const sheetRes = await fetch(finalUrl, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              id: newLead.id,
              name: newLead.name,
              whatsapp: newLead.whatsapp,
              examInterest: newLead.examInterest,
              timestamp: newLead.timestamp
            }),
          });

          // Google Web Apps return 302 redirects, but in server-side fetch,
          // redirects are followed by default. If successful, it'll respond with 200 or similar.
          if (sheetRes.ok) {
            sheetStatus = "success";
            sheetMessage = "Successfully forwarded and saved in Google Sheets!";
          } else {
            sheetStatus = "failed";
            sheetMessage = `Google Sheet Web App responded with status: ${sheetRes.status}`;
          }
        } catch (sheetErr: any) {
          sheetStatus = "failed";
          sheetMessage = sheetErr.message || "Failed to connect to Google Sheet Web App";
        }
      }

      res.status(201).json({
        success: true,
        lead: newLead,
        sheetSync: {
          status: sheetStatus,
          message: sheetMessage,
        }
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Server error submitting lead" });
    }
  });

  // Get Leads list endpoint
  app.get("/api/leads", (req, res) => {
    try {
      const leads = readJson(LEADS_FILE, []);
      res.json(leads);
    } catch (err: any) {
      res.status(500).json({ error: "Failed to read leads" });
    }
  });

  // Get Config endpoint
  app.get("/api/config", (req, res) => {
    try {
      const config = readJson(CONFIG_FILE, { googleSheetUrl: "https://script.google.com/macros/s/AKfycby-23gdlNE4Nc8xi-HcTRM0LpPtFBzA3HE29dND6ZPpiIbu-zmICJWuNE__vUTaXvQ45A/exec" });
      res.json(config);
    } catch (err: any) {
      res.status(500).json({ error: "Failed to read config" });
    }
  });

  // Update Config endpoint
  app.post("/api/config", (req, res) => {
    try {
      const { googleSheetUrl } = req.body;
      const config = { googleSheetUrl: googleSheetUrl || "" };
      writeJson(CONFIG_FILE, config);
      res.json({ success: true, config });
    } catch (err: any) {
      res.status(500).json({ error: "Failed to save config" });
    }
  });

  // Clear leads endpoint (Admin only)
  app.post("/api/clear-leads", (req, res) => {
    try {
      writeJson(LEADS_FILE, []);
      res.json({ success: true, message: "All local leads cleared." });
    } catch (err: any) {
      res.status(500).json({ error: "Failed to clear leads" });
    }
  });

  // Test connection endpoint
  app.post("/api/test-sheet", async (req, res) => {
    try {
      const { googleSheetUrl } = req.body;
      if (!googleSheetUrl) {
        return res.status(400).json({ error: "Google Sheet Web App URL is required" });
      }

      const testLead = {
        id: "test_" + Date.now(),
        name: "Test Connection",
        whatsapp: "9999999999",
        examInterest: "JEE Entrance",
        timestamp: new Date().toISOString()
      };

      const sheetRes = await fetch(googleSheetUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(testLead),
      });

      if (sheetRes.ok) {
        res.json({ success: true, message: "Connection successful! Test lead appended to your Google Sheet." });
      } else {
        res.status(400).json({ error: `Google Sheet responded with status ${sheetRes.status}. Check your Apps Script deployment.` });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to contact Google Sheet Web App" });
    }
  });

  // Vite Integration in Development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
