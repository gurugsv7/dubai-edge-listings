import React from 'react';
import { Link } from 'react-router-dom';

const MinistriesIntro = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-church-gold font-medium tracking-wider">OUR MINISTRIES</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Serving Our Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We serve the Lord by catering to the needs of everyone, following the Great Commission 
            of Jesus Christ (Matthew 28:18-20). Our ministries are organized into five main areas 
            to effectively reach and serve our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/ministries/core" 
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-church-green hover:bg-church-green/90 text-white px-6 py-2"
            >
              Core Ministries
            </Link>
            <Link 
              to="/ministries/outreach"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-church-green hover:bg-church-green/90 text-white px-6 py-2"
            >
              Outreach & Support
            </Link>
            <Link 
              to="/ministries/special"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-church-green hover:bg-church-green/90 text-white px-6 py-2"
            >
              Special Ministries
            </Link>
            <Link 
              to="/ministries/teaching"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-church-green hover:bg-church-green/90 text-white px-6 py-2"
            >
              Teaching & Development
            </Link>
            <Link 
              to="/ministries/sugam"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-church-green hover:bg-church-green/90 text-white px-6 py-2"
            >
              SUGAM Ministries
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Five Year Vision Plan</h3>
            <ul className="text-gray-600 space-y-3">
              <li>• Initiate ministries in 100 villages with 100 souls each</li>
              <li>• Purchase lands and build 50 house churches</li>
              <li>• Transform 100 Sunday Schools into Prayer Centers</li>
              <li>• Reach 100 souls in every center</li>
              <li>• Construct 50 prayer centers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistriesIntro;