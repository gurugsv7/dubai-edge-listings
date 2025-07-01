import React from 'react';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-church-green via-church-green/95 to-church-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl opacity-90 mb-12">
            Subscribe to our newsletter to receive weekly devotionals, church updates,
            and upcoming event notifications directly in your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-lg text-gray-900 w-full sm:min-w-[400px] focus:outline-none focus:ring-2 focus:ring-church-gold/50"
            />
            <Button
              className="bg-church-gold hover:bg-church-gold/90 text-black px-8 py-4 rounded-lg flex items-center justify-center gap-2 text-lg font-medium"
            >
              Subscribe
              <Send className="w-5 h-5" />
            </Button>
          </form>

          <p className="mt-6 text-sm opacity-75">
            Join our growing community of over 2,000 subscribers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;