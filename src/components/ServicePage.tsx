import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

interface ServicePageProps {
  title: string;
  heroImage: string;
  description: string;
  serviceDetails: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  cta: {
    title: string;
    description: string;
  };
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  heroImage,
  description,
  serviceDetails,
  benefits,
  cta
}) => {
  return (
    <>
      <Helmet>
        <title>{title} | LeVigile - Sécurité privée en Haute-Garonne</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <Header />
      
      {/* Hero section */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-levigile-dark mb-4">{title}</h1>
              <p className="text-gray-600 text-lg mb-6">{description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-levigile-blue hover:bg-blue-800">
                  <a href="#contact">Demander un devis</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-levigile-blue text-levigile-blue hover:bg-levigile-blue hover:text-white transition-all duration-300 group cursor-pointer"
                >
                  <a 
                    href="tel:+33561000000" 
                    className="flex items-center gap-2 group-hover:scale-105 transition-transform"
                  >
                    <PhoneCall 
                      size={20} 
                      className="group-hover:rotate-12 transition-transform duration-300"
                    />
                    Nous appeler
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={heroImage} 
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Service details section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-levigile-dark mb-12">
            Nos solutions de {title.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((detail, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-levigile-blue mb-3">{detail.title}</h3>
                <p className="text-gray-600">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-levigile-dark mb-12">
            Les avantages de notre service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-4">
                <div className="bg-levigile-blue rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-levigile-dark mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section id="contact" className="py-16 bg-levigile-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{cta.title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{cta.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-levigile-blue hover:bg-gray-100 font-semibold px-8 py-6 text-base"
            >
              <a href="mailto:contact@levigile.fr">Demander un devis</a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-levigile-blue font-semibold px-8 py-6 text-base"
            >
              <a href="tel:+33561000000" className="flex items-center gap-2">
                <PhoneCall size={20} />
                05 61 00 00 00
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ServicePage;
