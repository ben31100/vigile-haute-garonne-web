
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import BlogArticle from '@/components/blog/BlogArticle';

const Reglementation2025: React.FC = () => {
  const articleContent = (
    <>
      <p className="mb-6 text-lg">
        Le secteur de la sécurité privée est encadré par la loi, et 2025 apporte son lot de nouveautés. 
        Voici ce qu'il faut savoir pour rester conforme aux nouvelles exigences réglementaires.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Mise à jour des formations obligatoires</h2>
      <p className="mb-6">
        Les agents doivent suivre des formations continues certifiées. La réglementation 2025 renforce les exigences 
        en matière de formation pour tous les acteurs de la sécurité privée. Les agents devront désormais suivre un 
        minimum d'heures de formation continue tous les trois ans pour maintenir leur carte professionnelle valide. 
        Ces formations incluent des mises à jour sur les nouvelles menaces, les technologies de sécurité et les protocoles 
        d'intervention. Les entreprises de sécurité doivent s'assurer que leur personnel est à jour dans ses qualifications, 
        sous peine de sanctions administratives et financières.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Renforcement du contrôle par le CNAPS</h2>
      <p className="mb-6">
        Des vérifications renforcées sont prévues pour les entreprises de sécurité. Le Conseil National des Activités Privées 
        de Sécurité (CNAPS) disposera de moyens accrus pour contrôler la conformité des entreprises du secteur. Les inspections 
        seront plus fréquentes et plus approfondies, avec une attention particulière portée aux conditions de travail des agents, 
        à la validité des contrats, et au respect des procédures opérationnelles. Les entreprises devront tenir à jour un registre 
        détaillé de leurs activités et être en mesure de le présenter à tout moment lors d'un contrôle.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Équipements réglementés</h2>
      <p className="mb-6">
        Uniformes, badges, moyens de communication : tout doit être conforme. La nouvelle réglementation définit avec plus 
        de précision les équipements obligatoires et autorisés pour les agents de sécurité privée. Les uniformes doivent 
        désormais comporter des éléments d'identification spécifiques, et les badges professionnels intègrent de nouvelles 
        sécurités pour éviter les fraudes. Les moyens de communication et d'intervention doivent également répondre à des normes 
        techniques précises, particulièrement en ce qui concerne la tenue des registres numériques d'incidents.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Impact pour les clients</h2>
      <p className="mb-6">
        Les entreprises clientes doivent aussi s'assurer que leur prestataire est conforme. La réglementation 2025 renforce 
        la responsabilité des clients qui font appel à des services de sécurité privée. En cas de contrôle révélant des 
        non-conformités, la responsabilité du client peut être engagée s'il est prouvé qu'il n'a pas vérifié les accréditations 
        de son prestataire. Il est donc essentiel pour les entreprises faisant appel à des services de sécurité de vérifier 
        régulièrement les agréments et la conformité de leur prestataire, et de conserver les preuves de ces vérifications.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Conclusion</h2>
      <p className="mb-6">
        Chez LeVigile, nous anticipons chaque évolution réglementaire pour vous garantir une sécurité 100 % légale et à jour. 
        Notre équipe juridique surveille en permanence les changements législatifs et adapte nos procédures en conséquence. 
        Nous assurons également la formation continue de tous nos agents pour qu'ils soient toujours en conformité avec les 
        exigences légales. En choisissant LeVigile, vous avez l'assurance de travailler avec un partenaire qui respecte 
        scrupuleusement la réglementation en vigueur.
      </p>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Règlementation 2025 : ce que dit la loi sur la sécurité privée | Blog LeVigile</title>
        <meta name="description" content="Découvrez les nouvelles exigences légales pour la sécurité privée en 2025 : formations obligatoires, contrôles CNAPS, équipements et responsabilités." />
        <meta name="keywords" content="règlementation sécurité privée 2025, loi sécurité CNAPS, conformité société sécurité" />
      </Helmet>

      <Header />

      <BlogArticle
        title="Règlementation 2025 : ce que dit la loi sur la sécurité privée"
        subtitle="Les évolutions légales que vous devez connaître"
        author="Pierre Dubois"
        date="2025-02-10"
        readTime="9"
        featuredImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop"
        content={articleContent}
        tags={["Réglementation", "CNAPS", "Formation", "Conformité"]}
        relatedArticles={[
          {
            id: "2",
            title: "Sécurité événementielle : comment choisir la bonne société ?",
            image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1562&auto=format&fit=crop",
            slug: "securite-evenementielle-choisir"
          },
          {
            id: "3",
            title: "Différences entre gardiennage et surveillance mobile",
            image: "https://images.unsplash.com/photo-1513147122760-ad1d5bf68cdb?q=80&w=1470&auto=format&fit=crop",
            slug: "difference-gardiennage-surveillance-mobile"
          }
        ]}
        relatedServices={[
          {
            id: "11",
            title: "Conseil en conformité",
            description: "Audit et recommandations pour respecter la réglementation",
            slug: "conseil-conformite"
          },
          {
            id: "12",
            title: "Formation sécurité",
            description: "Formations certifiées pour agents et personnels",
            slug: "formation-securite"
          },
          {
            id: "13",
            title: "Audit réglementaire",
            description: "Évaluation de votre conformité aux lois sur la sécurité",
            slug: "audit-reglementaire"
          }
        ]}
      />

      <Footer />
    </>
  );
};

export default Reglementation2025;
