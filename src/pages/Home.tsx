import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Globe, ArrowRight, Star, Zap, Trophy } from 'lucide-react';
import { images } from '../assets/images';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Host Amazing
              <span className="block gradient-text">Virtual Events</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Create, manage, and deliver exceptional virtual experiences for your audience
              with our cutting-edge platform
            </p>
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl glow-button"
            >
              Browse Events
              <ArrowRight className="ml-2 h-6 w-6 animate-bounce-slow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, label: 'Events Hosted', value: '10,000+' },
              { icon: Users, label: 'Active Users', value: '50,000+' },
              { icon: Trophy, label: 'Success Rate', value: '99.9%' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-8 rounded-2xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="h-12 w-12 text-indigo-600 mb-4 animate-float" />
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the future of virtual events with our cutting-edge platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Calendar,
                title: 'Smart Scheduling',
                description: 'AI-powered scheduling system for optimal event timing'
              },
              {
                icon: Zap,
                title: 'Real-time Analytics',
                description: 'Track engagement and performance metrics instantly'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Connect with participants worldwide seamlessly'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="neo-card p-8 rounded-2xl hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="h-12 w-12 text-indigo-600 mb-6 animate-float" />
                <h3 className="text-xl font-semibold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center gradient-text mb-16">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: 'Virtual Tech Conference',
                image: images.events.techinnovation,
                date: 'Apr 15, 2024'
              },
              {
                id: 2,
                title: 'Digital Marketing Summit',
                image: images.events.digitalmarketing,
                date: 'Apr 20, 2024'
              },
              {
                id: 3,
                title: 'Leadership Masterclass',
                image: images.events.gl,
                date: 'May 1, 2024'
              }
            ].map((event, index) => (
              <div
                key={event.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="text-white text-sm">{event.date}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{event.title}</h3>
                  <p className="text-gray-600 mb-4">
                    Join industry experts for an immersive learning experience
                  </p>
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center gradient-text mb-16">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Event Organizer',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                quote: 'EventHub has transformed how we organize virtual events. The platform is intuitive and powerful.'
              },
              {
                name: 'Michael Chen',
                role: 'Tech Conference Host',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                quote: 'The analytics and engagement features are outstanding. Our attendees love the experience.'
              },
              {
                name: 'Emily Davis',
                role: 'Marketing Director',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
                quote: 'Best platform for hosting virtual events. The support team is incredibly helpful.'
              }
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="glass-card p-8 rounded-2xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="text-center">
                  <h4 className="font-semibold gradient-text">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center gradient-text mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Create Account',
                description: 'Sign up and complete your profile'
              },
              {
                step: '02',
                title: 'Choose Event',
                description: 'Browse and select from various events'
              },
              {
                step: '03',
                title: 'Register',
                description: 'Secure your spot with easy registration'
              },
              {
                step: '04',
                title: 'Join Event',
                description: 'Participate in immersive virtual experiences'
              }
            ].map((step, index) => (
              <div
                key={step.step}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 hidden md:block" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-indigo-100 mb-8">
              Get notified about upcoming events and exclusive offers
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;