import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { EventProvider } from './context/EventContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateEvent from './pages/CreateEvent';

const App = () => {
  return (
    <EventProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <Navbar />
          <main className="flex-grow page-transition">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetails />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create-event" element={<CreateEvent />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              className: 'glass-card',
              duration: 3000,
              style: {
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#1f2937',
                padding: '1rem',
                borderRadius: '0.5rem',
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
              },
            }}
          />
        </div>
      </Router>
    </EventProvider>
  );
};

export default App;