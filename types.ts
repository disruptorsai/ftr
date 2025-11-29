export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  coordinates: { x: number; y: number }; // For SVG map
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export enum PillarType {
  FITNESS = 'Fitness',
  NUTRITION = 'Nutrition',
  CREATIVE_ARTS = 'Creative Arts',
  COMMUNITY_SERVICE = 'Community Service'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: Date;
}