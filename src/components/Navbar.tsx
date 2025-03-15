import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Home, LayoutDashboard, LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Calendar className="h-8 w-8 text-indigo-600 animate-float group-hover:text-purple-600 transition-colors duration-300" />
              <span className="text-xl font-bold gradient-text">EventHub</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-50 ${
                location.pathname === '/' ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/events" 
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-50 ${
                location.pathname === '/events' ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              <Calendar className="h-5 w-5" />
              <span>Events</span>
            </Link>
            <Link 
              to="/dashboard" 
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-50 ${
                location.pathname === '/dashboard' ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/register" 
              className="flex items-center space-x-1 px-6 py-2 rounded-lg glow-button text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <LogIn className="h-5 w-5" />
              <span>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;