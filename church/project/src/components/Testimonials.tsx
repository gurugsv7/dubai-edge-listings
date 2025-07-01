import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This church has become my second home. The community is so welcoming and supportive.",
      author: "Sarah Mitchell",
      role: "Church Member",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
    {
      quote: "The youth program has had such a positive impact on my teenagers' lives.",
      author: "Michael Thompson",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
    {
      quote: "I've grown so much in my faith since joining this wonderful community.",
      author: "Lisa Anderson",
      role: "Church Member",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <p className="text-lg text-gray-600">Hear from our church family</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-gray-50 rounded-lg p-8 relative"
            >
              <Quote className="w-8 h-8 text-church-gold absolute top-6 left-6 opacity-20" />
              <blockquote className="relative">
                <p className="text-gray-600 mb-6 pt-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic">
                      {testimonial.author}
                    </cite>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;