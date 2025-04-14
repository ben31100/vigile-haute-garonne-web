
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Marie",
      role: "Gérante de boutique, Toulouse",
      quote: "Depuis que nous avons fait appel à LeVigile pour la sécurité de notre magasin, les tentatives de vol ont considérablement diminué. Leurs agents sont professionnels et attentifs.",
      rating: 5
    },
    {
      name: "Jean",
      role: "Directeur d'événements, Blagnac",
      quote: "Pour notre festival annuel, nous faisons confiance à LeVigile depuis 3 ans. Leur équipe assure une sécurité discrète mais efficace, permettant à nos visiteurs de profiter pleinement de l'événement.",
      rating: 5
    },
    {
      name: "Sophie",
      role: "Responsable d'immeuble, Colomiers",
      quote: "Le service de rondes nocturnes de LeVigile a apporté un sentiment de sécurité à tous les résidents de notre copropriété. Leur réactivité en cas d'incident est exemplaire.",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-levigile-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-levigile-blue">Ils nous font confiance</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de nos services de sécurité privée en Haute-Garonne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-levigile-blue relative"
            >
              <div className="absolute -top-4 -left-4 bg-levigile-red p-3 rounded-full">
                <Quote className="h-6 w-6 text-white" />
              </div>
              
              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-levigile-blue">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Rejoignez nos clients satisfaits et bénéficiez de services de sécurité sur mesure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
