import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Event } from '../types/event';

// Initial demo events
const initialEvents: Event[] = [
  {
    id: 1,
    title: "Global Tech Summit 2024",
    date: "2024-04-15",
    time: "10:00 AM",
    category: "Technology",
    location: "Virtual",
    price: 299,
    description: "Join industry leaders in this exclusive tech summit",
    registrations: 1250,
    status: "Active",
    speaker: {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp"
    }
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    date: "2024-04-20",
    time: "2:00 PM",
    category: "Marketing",
    location: "Virtual",
    price: 199,
    description: "Master the latest digital marketing strategies",
    registrations: 850,
    status: "Active",
    speaker: {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Growth Co"
    }
  },
  {
    id: 3,
    title: "Future of AI Conference",
    date: "2024-05-01",
    time: "9:00 AM",
    category: "Technology",
    location: "Virtual",
    price: 399,
    description: "Explore the latest in artificial intelligence",
    registrations: 2100,
    status: "Active",
    speaker: {
      name: "Dr. Emily Watson",
      role: "AI Research Lead",
      company: "AI Innovations"
    }
  }
];

interface EventContextType {
  upcomingEvents: Event[];
  addEvent: (event: Event) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: ReactNode }) {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>(initialEvents);

  const addEvent = (event: Event) => {
    setUpcomingEvents(prev => [event, ...prev]);
  };

  return (
    <EventContext.Provider value={{ upcomingEvents, addEvent }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
}