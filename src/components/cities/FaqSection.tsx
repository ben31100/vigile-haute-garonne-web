
import React from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ 
  items, 
  title = "Questions fréquentes" 
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-levigile-blue">{title}</h2>
          
          <div className="space-y-6">
            {items.map((item, index) => (
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
