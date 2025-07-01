import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import founderImage1 from '../assets/founder 1.png';
import founderImage2 from '../assets/founder 2.png';

const Founders = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rev. I. Asir Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-church-gold/10 rounded-lg -z-10" />
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={founderImage1}
                  alt="Rev. I. Asir"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-church-gold font-medium tracking-wider">OUR FOUNDER</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-8">(Late) Rev. I. Asir</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Born on 11th January 1950 into a conservative Christian family, (Late) Rev. I. Asir began his earthly journey in a small village in Tirunelveli district of Tamil Nadu. At the age of 15, he committed his life to Jesus, and in 1970 he answered God's call for full-time ministry by joining the Tamil Nadu Bible College, Madurai.
                </p>
                <p className="text-gray-600 mb-6">
                  In December 1974, God blessed him with a wonderful life partner Sis. Daisy, a woman of prayer, vision & faith. In 1979, answering God's call, they came to Pondicherry amidst adversities and started a church in a rented house. With faith as their only source of encouragement, they persevered in their mission to reach the masses with God's Word.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Legacy of Faith</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-church-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Founded and grew the church from no believers to thousands</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-church-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Planted 32 churches in Pondicherry and 7 in other states</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-church-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Supported 120 missionaries across India</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-church-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Trained 460 believers through "Vision India"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mrs. Daisy Asir Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1">
              <span className="text-church-gold font-medium tracking-wider">OUR CO-FOUNDER</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-8">(Late) Mrs. Daisy Asir</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Born on July 7th, 1947, in Pulvilai, Nagercoil, (Late) Mrs. Daisy Asir, lovingly known as Pastor Amma, was a pillar of strength and faith. Growing up in a conservative Christian environment, she dedicated her life to serving the Lord and His people.
                </p>
                <p className="text-gray-600 mb-6">
                  After marriage to (Late) Rev. Asir in December 1974, she heard God's distinct call to minister in Pondicherry. Together, they faced numerous challenges with unwavering faith and determination, building a ministry that would impact thousands of lives.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">A Life of Service</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-church-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Devoted prayer warrior and supporter of ministry</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-church-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Passionate about helping the poor and needy</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-church-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Known for her generous spirit and hospitality</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-church-gold mr-3 mt-1 flex-shrink-0" />
                      <span>Supported the church through critical transitions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-church-green/10 rounded-lg -z-10" />
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={founderImage2}
                  alt="Mrs. Daisy Asir"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Continuing the Legacy</h2>
          <p className="text-gray-600 mb-8">
            Today, their vision lives on through their children: Rev. Steve Asir, Mrs. Dora Steve, 
            Pr. Praveen Isaac Asir, Pr. Nixon, and Mrs. Beulah Nixon, who continue to carry 
            forward the mission of reaching the unreached through a life of prayer and faith.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-church-green text-church-green hover:bg-church-green hover:text-white"
          >
            Learn More About Our Church
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Founders;