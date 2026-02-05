
export interface Deal {
  id: string;
  location: string;
  price: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
