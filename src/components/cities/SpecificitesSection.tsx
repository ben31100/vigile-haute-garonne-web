
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

export interface SpecificiteItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SpecificitesSectionProps {
  items: SpecificiteItem[];
}

const SpecificitesSection: React.FC<SpecificitesSectionProps> = ({ items }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-levigile-blue">
          Spécificités de nos services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="service-card border-t-4 border-t-levigile-blue shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-levigile-blue/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-levigile-blue" />
                  </div>
                  <CardTitle className="text-xl font-bold text-levigile-blue">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecificitesSection;
