import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, BarChart, Settings, TrendingUp, Award, Target } from 'lucide-react';
import { useEvents } from '../context/EventContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { upcomingEvents } = useEvents();

  const stats = [
    { icon: Calendar, label: 'Total Events', value: '2,547', color: 'from-indigo-500 to-purple-500' },
    { icon: Users, label: 'Total Attendees', value: '128.5K', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, label: 'Growth Rate', value: '+24.3%', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, label: 'Success Rate', value: '98.7%', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-12 animate-slide-in">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Event Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your events.</p>
        </div>
        <button 
          onClick={() => navigate('/create-event')}
          className="px-8 py-4 rounded-full glow-button text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
        >
          Create New Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="glass-card rounded-2xl p-6 hover-lift animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                <stat.icon className="h-6 w-6 text-white animate-float" />
              </div>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
            <div className="text-3xl font-bold gradient-text">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in glass-card">
        <div className="px-6 py-4 border-b bg-gradient-to-r from-indigo-50 to-purple-50">
          <h2 className="text-2xl font-semibold gradient-text">Upcoming Events</h2>
        </div>
        <div className="divide-y">
          {upcomingEvents.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <Target className="h-16 w-16 text-gray-400 mx-auto mb-4 animate-float" />
              <p className="text-gray-500 text-lg">No upcoming events. Create your first event!</p>
            </div>
          ) : (
            upcomingEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="p-6 hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold gradient-text mb-1">
                      {event.registrations.toLocaleString()} registrations
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;