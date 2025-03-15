import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Users, MapPin, Share2 } from 'lucide-react';
import { events } from '../data/events';
import toast from 'react-hot-toast';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Event not found</h1>
          <p className="mt-2 text-gray-600">The event you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleRegister = () => {
    toast.success('Successfully registered for the event! 🎉');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-5 w-5" />
              <span>{event.attendees} attendees</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="prose max-w-none mb-12">
            <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
            <p className="whitespace-pre-line">{event.description}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Featured Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.speakers.map((speaker) => (
                <div key={speaker.name} className="flex items-center space-x-4">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{speaker.name}</h3>
                    <p className="text-gray-600">{speaker.role}</p>
                    <p className="text-gray-600">{speaker.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <h2 className="text-2xl font-semibold mb-4">Register Now</h2>
            <p className="text-gray-600 mb-6">Secure your spot at this exclusive virtual event</p>
            
            <button
              onClick={handleRegister}
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 mb-4"
            >
              Register for Free
            </button>
            
            <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 rounded-md hover:bg-gray-50">
              <Share2 className="h-5 w-5" />
              <span>Share Event</span>
            </button>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-2">Event Details</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Category: {event.category}</p>
                <p>Price: ${event.price}</p>
                <p>Platform: Zoom (link provided after registration)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;