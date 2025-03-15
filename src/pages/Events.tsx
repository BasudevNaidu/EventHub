import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Search, Filter, MapPin, Tag, ArrowRight } from 'lucide-react';
import { events, categories } from '../data/events';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All Events' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center animate-slide-down">
          <h1 className="text-5xl font-bold gradient-text mb-6">Discover Amazing Events</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find and join virtual events that match your interests and connect with people worldwide
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative glass-card rounded-full p-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events by title or location..."
              className="w-full pl-14 pr-4 py-4 bg-transparent border-none rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'gradient-bg-1 text-white shadow-lg transform scale-105'
                  : 'glass-card hover:scale-105'
              }`}
              onClick={() => setSelectedCategory(category)}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="glass-card rounded-2xl overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative group">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium glass-card text-indigo-600">
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 gradient-text">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-indigo-600" />
                    <span>{event.attendees} attendees</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Tag className="h-5 w-5 mr-2 text-indigo-600" />
                    <span>${event.price}</span>
                  </div>
                </div>

                <Link
                  to={`/events/${event.id}`}
                  className="block w-full text-center py-3 rounded-lg glow-button bg-gradient-to-r from-indigo-600 to-purple-600 text-white transform hover:translate-y-[-2px] transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5 animate-bounce-slow" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;