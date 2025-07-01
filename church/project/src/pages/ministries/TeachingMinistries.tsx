import React from 'react';
import { Heart, BookOpen, Book } from 'lucide-react';

const TeachingMinistries = () => {
  const ministries = [
    {
      title: "Hope Center",
      icon: Heart,
      description: "Counseling and prayer center open Monday to Friday, 9:00 AM to 7:00 PM, offering guidance to newcomers.",
      id: "hope"
    },
    {
      title: "Teaching and Training",
      icon: BookOpen,
      description: "Daily Bible Study Hour and specialized training for Ward Leaders and Sunday school teachers.",
      id: "training"
    },
    {
      title: "Pokkisham",
      icon: Book,
      description: "Annual mega memory verse competition encouraging scripture memorization.",
      id: "pokkisham"
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-church-gold font-medium tracking-wider">TEACHING & DEVELOPMENT</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Growing in Faith</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Through our teaching and development ministries, we equip believers with 
            biblical knowledge and spiritual guidance for their faith journey.
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

export default TeachingMinistries;