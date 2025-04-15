
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import BlogArticle from '@/components/blog/BlogArticle';

const DifferenceGardiennageSurveillance: React.FC = () => {
  const articleContent = (
    <>
      <p className="mb-6 text-lg">
        Gardiennage ou surveillance mobile ? Ces deux prestations sont souvent confondues. Voici leurs différences, 
        pour mieux choisir votre solution de sécurité adaptée à vos besoins spécifiques.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Gardiennage : présence continue sur site</h2>
      <p className="mb-6">
        Un agent reste en poste sur votre site (commerce, chantier, entrepôt), 24h/24 ou en horaires définis. 
        Cette solution offre une présence dissuasive permanente et permet une réaction immédiate en cas d'incident. 
        L'agent de gardiennage connaît parfaitement les lieux qu'il protège et peut assurer des missions complémentaires 
        comme l'accueil des visiteurs, la gestion des entrées/sorties ou la surveillance des systèmes de sécurité.
      </p>

      <figure className="my-8">
        <img 
          src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1470&auto=format&fit=crop" 
          alt="Surveillance et gardiennage" 
          className="w-full rounded-lg shadow-md"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Différentes approches pour la sécurité de vos locaux
        </figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Surveillance mobile : rondes à horaires définis ou aléatoires</h2>
      <p className="mb-6">
        L'agent se déplace d'un site à l'autre, souvent la nuit, pour contrôler que tout est en ordre. Cette solution 
        est moins coûteuse que le gardiennage permanent et convient parfaitement aux sites fermés en dehors des heures 
        d'activité. Les rondes peuvent être effectuées à des horaires fixes ou de manière aléatoire pour maximiser l'effet 
        de surprise et la dissuasion. L'agent dispose généralement d'un véhicule pour couvrir plusieurs sites dans un 
        secteur géographique défini.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Coûts et flexibilité</h2>
      <p className="mb-6">
        Le gardiennage est plus coûteux mais permanent ; la surveillance mobile est plus souple. Le prix d'un agent 
        de gardiennage 24h/24 peut représenter un investissement conséquent, mais il est justifié pour les sites sensibles 
        ou à forte valeur. La surveillance mobile permet de mutualiser les coûts entre plusieurs clients tout en assurant 
        une protection efficace. Certains sites peuvent d'ailleurs combiner les deux approches selon les moments de la journée 
        ou de la semaine.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Quel choix selon vos besoins ?</h2>
      <p className="mb-6">
        Commerce, chantier, immeuble : chaque contexte a une solution adaptée. Pour un commerce de luxe en centre-ville, 
        le gardiennage pendant les heures d'ouverture peut être privilégié. Pour un chantier ou un entrepôt fermé la nuit, 
        des rondes de surveillance mobile peuvent suffire. Pour un immeuble de bureaux, une combinaison des deux services 
        peut être envisagée : gardiennage en journée pour l'accueil et le contrôle d'accès, surveillance mobile la nuit 
        pour les rondes de sécurité.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Conclusion</h2>
      <p className="mb-6">
        LeVigile propose ces deux types de prestations dans toute la région toulousaine et peut vous conseiller sur la 
        formule la plus adaptée à votre situation. Nos experts analysent vos besoins spécifiques, votre budget et les 
        particularités de votre site pour vous recommander la solution idéale. Contactez-nous pour une étude gratuite : 
        nous vous conseillerons la formule la plus efficace pour votre sécurité.
      </p>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Différences entre gardiennage et surveillance mobile | Blog LeVigile</title>
        <meta name="description" content="Comprendre les différences entre gardiennage permanent et surveillance mobile pour choisir la solution de sécurité adaptée à vos besoins spécifiques." />
        <meta name="keywords" content="différence gardiennage surveillance, sécurité privée Toulouse, rondes de nuit Colomiers" />
      </Helmet>

      <Header />

      <BlogArticle
        title="Différences entre gardiennage et surveillance mobile"
        subtitle="Comprendre ces deux prestations souvent confondues"
        author="Jean Moreau"
        date="2025-03-15"
        readTime="7"
        featuredImage="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1470&auto=format&fit=crop"
        content={articleContent}
        tags={["Gardiennage", "Surveillance mobile", "Sécurité privée", "Rondes de nuit"]}
        relatedArticles={[
          {
            id: "4",
            title: "Pourquoi opter pour un agent de sécurité la nuit à Colomiers",
            image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1470&auto=format&fit=crop",
            slug: "agent-securite-nuit-colomiers"
          },
          {
            id: "1",
            title: "5 conseils pour protéger votre commerce à Toulouse",
            image: "/lovable-uploads/3beb272a-6541-4eb8-b22e-a1c263954ff4.png",
            slug: "proteger-commerce-toulouse"
          }
        ]}
        relatedServices={[
          {
            id: "3",
            title: "Gardiennage",
            description: "Agents de sécurité qualifiés pour la protection de vos locaux",
            slug: "gardiennage"
          },
          {
            id: "7",
            title: "Rondes de surveillance",
            description: "Patrouilles mobiles pour la sécurité de vos biens",
            slug: "rondes-surveillance"
          },
          {
            id: "8",
            title: "Télésurveillance",
            description: "Monitoring à distance et intervention sur alarme",
            slug: "telesurveillance"
          }
        ]}
      />

      <Footer />
    </>
  );
};

export default DifferenceGardiennageSurveillance;
