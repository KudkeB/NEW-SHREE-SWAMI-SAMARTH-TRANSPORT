export type Language = 'mr' | 'en';

export interface RouteArea {
  id: string;
  name: string;
  nameMr: string;
  operator: string;
  operatorMr: string;
  tagline: string;
  taglineMr: string;
  destinations: string[];
  destinationsMr: string[];
  transitTime: string;
  transitTimeMr: string;
  popularFor: string;
  popularForMr: string;
  phone: string;
}

export interface Vehicle {
  id: string;
  name: string;
  nameMr: string;
  capacity: string;
  dimensions: string;
  bestFor: string;
  bestForMr: string;
  badge: string;
}

export interface Review {
  id: string;
  author: string;
  reviewCount?: string;
  rating: number;
  date: string;
  text: string;
  textMr?: string;
  ownerReply?: {
    author: string;
    date: string;
    text: string;
  };
  hasPhoto?: boolean;
}

export interface PartLoadFormData {
  name: string;
  phone: string;
  pickup: string;
  delivery: string;
  material: string;
  weight: string;
  packaging: string;
  notes: string;
}

export interface FullLoadFormData {
  name: string;
  phone: string;
  pickup: string;
  delivery: string;
  material: string;
  weight: string;
  packaging: string;
  vehicle: string;
  date: string;
  notes: string;
}

export interface AreaEnquiryFormData {
  name: string;
  phone: string;
  area: string;
  enquiry: string;
}

export interface SubmittedBooking {
  id: string;
  type: 'part' | 'full' | 'enquiry';
  createdAt: string;
  name: string;
  phone: string;
  pickup: string;
  delivery: string;
  material: string;
  weight?: string;
  packaging?: string;
  vehicle?: string;
  date?: string;
  notes?: string;
  enquiryText?: string;
  status: 'Received' | 'In Review' | 'Vehicle Assigned' | 'Completed';
}
