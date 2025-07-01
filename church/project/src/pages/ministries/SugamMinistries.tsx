import React from 'react';
import { MapPin, Baby, Megaphone } from 'lucide-react';

const SugamMinistries = () => {
  const ministries = [
    {
      title: "Village Ministry",
      icon: MapPin,
      description: "56 active village ministries with weekly evangelism and monthly medical camps.",
      id: "village"
    },
    {
      title: "Sunday School Outreach",
      icon: Baby,
      description: "Operating in 100+ locations, reaching 3000+ children weekly with the gospel.",
      id: "sunday-school"
    },
    {
      title: "Supporting Ministries",
      icon: Megaphone,
      description: "Prayer Walkers, Partners, Gospel Team, and Action Warriors supporting our mission.",
      id: "supporting"
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-church-gold font-medium tracking-wider">SUGAM MINISTRIES</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Reaching Communities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SUGAM Ministries focus on reaching out to villages and communities, bringing the 
            gospel to every corner through dedicated teams and structured programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry) => (
            <div
              key={ministry.title}
              id={ministry.id}
              className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-church-green/10 p-4 rounded-full mb-6">
                  <ministry.icon className="w-8 h-8 text-church-green" />
                </div>
                <h4 className="text-xl font-semibold mb-4">{ministry.title}</h4>
                <p className="text-gray-600">{ministry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SugamMinistries;