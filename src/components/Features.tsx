import React from 'react';
import { Leaf, Truck, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-12 w-12 text-green-600" />,
    title: '100% Organic',
    description: 'Certified organic mushrooms grown without harmful chemicals'
  },
  {
    icon: <Truck className="h-12 w-12 text-green-600" />,
    title: 'Free Delivery',
    description: 'Fast and free shipping on all orders over Rs 50'
  },
  {
    icon: <Shield className="h-12 w-12 text-green-600" />,
    title: 'Quality Guarantee',
    description: 'Premium quality products with satisfaction guarantee'
  },
  {
    icon: <Clock className="h-12 w-12 text-green-600" />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your needs'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}