import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      children: [
        { name: 'Our Story', href: '/about' },
        { name: 'Our Founders', href: '/founders' },
        { name: 'Leadership', href: '/leadership' },
      ],
    },
    { 
      name: 'Ministries', 
      href: '/ministries',
      children: [
        // Core Ministries
        { name: 'Ward Prayers (Care cell)', href: '/ministries/core#ward-prayers' },
        { name: 'Children\'s Ministry', href: '/ministries/core#children' },
        { name: 'Youth Ministry', href: '/ministries/core#youth' },
        
        // Outreach & Support
        { name: 'Media Ministry', href: '/ministries/outreach#media' },
        { name: 'Missions', href: '/ministries/outreach#missions' },
        { name: 'Care for the Needy', href: '/ministries/outreach#care' },
        
        // Special Ministries
        { name: 'Cornelius Ministry', href: '/ministries/special#cornelius' },
        { name: 'Students\' Ministry', href: '/ministries/special#students' },
        { name: 'Prison Ministry', href: '/ministries/special#prison' },
        
        // Teaching & Development
        { name: 'Hope Center', href: '/ministries/teaching#hope' },
        { name: 'Teaching and Training', href: '/ministries/teaching#training' },
        { name: 'Pokkisham', href: '/ministries/teaching#pokkisham' },
        
        // SUGAM Ministries
        { name: 'Village Ministry', href: '/ministries/sugam#village' },
        { name: 'Sunday School Outreach', href: '/ministries/sugam#sunday-school' },
        { name: 'Supporting Ministries', href: '/ministries/sugam#supporting' },
      ],
    },
    { name: 'Events', href: '/events' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Live Stream', href: '/live' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="HAG Church Logo" className="h-12 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-church-green">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="px-1 pt-1 text-sm font-medium text-gray-700 hover:text-church-green"
                  >
                    {item.name}
                  </Link>
                )}

                {item.children && (
                  <div className="absolute hidden group-hover:block w-64 py-2 bg-white rounded-md shadow-xl border border-gray-200 ring-1 ring-black ring-opacity-5 z-50 right-0">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-church-green font-medium"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button variant="primary" size="sm">
              Donate
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-church-green focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <React.Fragment key={item.name}>
                {item.children ? (
                  <>
                    <div className="px-4 py-2 text-base font-medium text-gray-700">
                      {item.name}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block pl-8 py-2 text-base font-medium text-gray-600 hover:text-church-green"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-church-green"
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <div className="px-4 py-2">
              <Button variant="primary" size="sm" className="w-full">
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;