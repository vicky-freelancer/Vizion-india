export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  result?: string;
  badge?: string;
  text: string;
  avatar: string;
  exam: string;
}

export interface ExamCategoryItem {
  name: string;
  code: string;
  popular?: boolean;
}

export interface LeadFormData {
  name: string;
  whatsapp: string;
  examInterest: string;
}
