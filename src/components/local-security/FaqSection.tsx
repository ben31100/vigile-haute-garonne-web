
import React from 'react';
import { FaqItem } from './SeoElements';

interface FaqSectionProps {
  faqItems: FaqItem[];
  cityName: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqItems, cityName }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-levigile-blue">
            Questions fréquentes sur nos services à {cityName}
          </h2>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3 text-levigile-blue">
                  {item.question}
                </h3>
                <p className="text-gray-700">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
