import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import ourStoryImage from '../assets/our story.png';

const About = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-church-gold/10 rounded-lg -z-10" />
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={ourStoryImage}
                alt="Our Church Story"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-church-green/10 rounded-lg -z-10" />
          </div>

          <div className="lg:pl-8">
            <span className="text-church-gold font-medium tracking-wider">OUR STORY</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-8">Welcome to Our Community</h2>
            
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                At Hallelujah Assembly of God Church, we believe in creating a warm, 
                inclusive environment where everyone can experience God's love and grow 
                in their faith journey.
              </p>
              <p>
                Our mission is to spread the Gospel, serve our community, and help each 
                person discover their God-given purpose through:
              </p>
              
              <ul className="space-y-3">
                {['Vibrant Worship', 'Biblical Teaching', 'Community Service', 'Youth Development'].map((item) => (
                  <li key={item} className="flex items-center">
                    <ArrowRight className="w-5 h-5 text-church-gold mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-church-green text-church-green hover:bg-church-green hover:text-white"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;