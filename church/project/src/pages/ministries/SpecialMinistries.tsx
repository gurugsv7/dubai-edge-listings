import React from 'react';
import { Church, GraduationCap, PrinterIcon as Prison } from 'lucide-react';

const SpecialMinistries = () => {
  const ministries = [
    {
      title: "Cornelius Ministry",
      icon: Church,
      description: "Supporting believers in organizing Gospel Meetings in their homes, reaching out to friends and relatives.",
      id: "cornelius"
    },
    {
      title: "Students' Ministry",
      icon: GraduationCap,
      description: "Organizing Care Groups in colleges and special prayers for students (Exambiance).",
      id: "students"
    },
    {
      title: "Prison Ministry",
      icon: Prison,
      description: "Weekly gospel preaching at Pondicherry Central Jail through songs, dramas, and counseling.",
      id: "prison"
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-church-gold font-medium tracking-wider">SPECIAL MINISTRIES</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Reaching Every Soul</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our special ministries focus on reaching specific groups with targeted approaches, 
            ensuring that everyone has the opportunity to experience God's love.
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

export default SpecialMinistries;