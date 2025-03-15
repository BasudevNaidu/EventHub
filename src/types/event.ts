export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  category: string;
  location: string;
  price: number;
  description: string;
  registrations: number;
  status: string;
  speaker: {
    name: string;
    role: string;
    company: string;
  };
}