
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactCta: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-bold text-levigile-dark mb-4">Besoin d'un service de sécurité ?</h3>
      <div className="bg-levigile-lightgray p-4 rounded-lg">
        <p className="text-gray-700 mb-4">Nos experts sont disponibles pour répondre à toutes vos questions sur la sécurité de votre entreprise ou de votre événement.</p>
        <Button className="w-full bg-levigile-blue hover:bg-levigile-dark">
          Contactez-nous
        </Button>
      </div>
    </div>
  );
};

export default ContactCta;
