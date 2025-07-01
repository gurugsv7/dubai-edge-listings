import React from 'react';
import { Baby, Users, HelpingHand as PrayingHands } from 'lucide-react';

const CoreMinistries = () => {
  const ministries = [
    {
      title: "Ward Prayers (Care cell)",
      icon: PrayingHands,
      description: "124 Ward leaders across three regions gather every Wednesday at 7:00 pm for fellowship, leading prayers and building believers in the word of God.",
      id: "ward-prayers"
    },
    {
      title: "Children's Ministry",
      icon: Baby,
      description: "Serving 300+ children with 31 dedicated Sunday school teachers, offering structured curriculum and annual VBS programs reaching 3000+ children.",
      id: "children"
    },
    {
      title: "Youth Ministry",
      icon: Users,
      description: "400+ active young members serving with zeal through Youth Fellowships and Prayer services every Tuesday at 7:00 pm.",
      id: "youth"
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-church-gold font-medium tracking-wider">CORE MINISTRIES</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Building Strong Foundations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our core ministries form the foundation of our church community, nurturing spiritual growth 
            and fostering deep connections among our members.
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

export default CoreMinistries;