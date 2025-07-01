import React from 'react';
import { Play, Heart, Users, Phone } from 'lucide-react';
import { Button } from './ui/button';

const QuickLinks = () => {
  const links = [
    {
      title: 'Watch Live',
      icon: Play,
      description: 'Join our live services',
      href: '/live',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Donate',
      icon: Heart,
      description: 'Support our ministry',
      href: '/donate',
      color: 'text-church-gold',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Join a Ministry',
      icon: Users,
      description: 'Get involved',
      href: '/ministries',
      color: 'text-church-green',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Contact Us',
      icon: Phone,
      description: 'Get in touch',
      href: '/contact',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link) => (
            <div
              key={link.title}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`${link.bgColor} p-8`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`${link.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{link.title}</h3>
                  <p className="text-gray-600 mb-6">{link.description}</p>
                  <Button 
                    variant="outline" 
                    className={`group-hover:bg-opacity-100 group-hover:text-white transition-colors ${link.color.replace('text', 'group-hover:bg')}`}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;