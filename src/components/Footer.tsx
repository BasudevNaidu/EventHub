import React from 'react';
import { Calendar, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">EventHub</span>
            </div>
            <p className="mt-4 text-gray-400">
              Your premier platform for virtual event management and hosting.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>basudevnaidu2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+91 7848921602</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/basudev_na59764" target="_blank" rel="noopener noreferrer text-gray-400 hover:text-white">Twitter</a>
              <a href="https://www.linkedin.com/in/naidu-basudev-96b7a6289/" target="_blank" rel="noopener noreferrer text-gray-400 hover:text-white">LinkedIn</a>
              <a href="https://github.com/BasudevNaidu" target="_blank" rel="noopener noreferrer text-gray-400 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 EventHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;