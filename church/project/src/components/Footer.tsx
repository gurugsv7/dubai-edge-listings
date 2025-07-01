import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-4">HAG Church</h3>
            <p className="mb-4">
              A place to grow in faith, find community, and serve others.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-church-gold">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-church-gold">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-church-gold">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-church-gold">About Us</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-church-gold">Events</Link>
              </li>
              <li>
                <Link to="/sermons" className="hover:text-church-gold">Sermons</Link>
              </li>
              <li>
                <Link to="/give" className="hover:text-church-gold">Give</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Ministries</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ministries/children" className="hover:text-church-gold">Children</Link>
              </li>
              <li>
                <Link to="/ministries/youth" className="hover:text-church-gold">Youth</Link>
              </li>
              <li>
                <Link to="/ministries/outreach" className="hover:text-church-gold">Community Outreach</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-church-gold" />
                <span>123 Church Street, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-church-gold" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-church-gold" />
                <span>info@hagchurch.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hallelujah Assembly of God Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;