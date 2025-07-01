import React from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';

const Sermons = () => {
  const sermons = [
    {
      title: "Walking in Faith",
      speaker: "Pastor John Smith",
      date: "March 10, 2024",
      thumbnail: "https://images.unsplash.com/photo-1447758902204-48010b87c24d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "The Power of Prayer",
      speaker: "Pastor Sarah Johnson",
      date: "March 3, 2024",
      thumbnail: "https://images.unsplash.com/photo-1445855743215-296f71d4be49?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Living with Purpose",
      speaker: "Pastor Michael Brown",
      date: "February 25, 2024",
      thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Sermons</h2>
          <p className="text-lg text-gray-600">Watch and listen to our latest messages</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <div key={sermon.title} className="group relative">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
                <p className="text-gray-600">{sermon.speaker}</p>
                <p className="text-gray-500 text-sm">{sermon.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Sermons
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sermons;