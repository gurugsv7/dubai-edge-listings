import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from './ui/button';

const Events = () => {
  const events = [
    {
      title: "Sunday Morning Service",
      date: "Every Sunday",
      time: "10:00 AM",
      description: "Join us for worship, prayer, and the Word.",
    },
    {
      title: "Youth Night",
      date: "Every Friday",
      time: "7:00 PM",
      description: "An evening of fellowship for young adults.",
    },
    {
      title: "Bible Study",
      date: "Every Wednesday",
      time: "6:30 PM",
      description: "Deep dive into Scripture with our pastoral team.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600">Join us at our upcoming services and events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <p className="text-gray-600 mb-6">{event.description}</p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;