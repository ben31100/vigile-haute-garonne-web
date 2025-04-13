
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

interface CtaSectionProps {
  title: string;
  subtitle: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="py-16 bg-levigile-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-levigile-blue hover:bg-gray-100 py-6">
            <Phone className="mr-2 h-5 w-5" />
            Appeler au 05 54 54 64 28
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 py-6">
            <Mail className="mr-2 h-5 w-5" />
            Demander un devis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
