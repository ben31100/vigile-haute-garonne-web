
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import BlogArticle from '@/components/blog/BlogArticle';

const SecuriteEvenementielle: React.FC = () => {
  const articleContent = (
    <>
      <p className="mb-6 text-lg">
        Organiser un événement, c'est aussi penser à la sécurité des participants. Mais comment s'assurer de choisir 
        la bonne société de sécurité pour votre concert, salon ou manifestation ? Voici nos conseils pour faire le bon choix.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Vérifiez les autorisations CNAPS</h2>
      <p className="mb-6">
        Une société sérieuse possède un numéro d'agrément et des agents formés. Le Conseil National des Activités Privées 
        de Sécurité (CNAPS) est l'organisme qui régule la profession. Tout prestataire légitime doit pouvoir vous présenter 
        son autorisation d'exercer et les cartes professionnelles de ses agents. Ces documents garantissent que vous travaillez 
        avec des professionnels reconnus par l'État.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Évaluez leur expérience dans l'événementiel</h2>
      <p className="mb-6">
        Chaque type d'événement (festif, politique, professionnel) nécessite un savoir-faire spécifique. Une société 
        expérimentée dans la sécurité des concerts n'aura pas forcément les compétences pour gérer un salon professionnel 
        ou une conférence politique. Demandez des références dans votre secteur d'activité et n'hésitez pas à contacter 
        leurs anciens clients pour avoir des retours d'expérience.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Demandez un plan de sécurité sur mesure</h2>
      <p className="mb-6">
        Chaque lieu et public a ses risques : la société doit vous proposer un dispositif adapté. Un prestataire sérieux 
        vous proposera une visite préalable du site, une analyse des risques spécifiques et un plan détaillé incluant le 
        nombre d'agents nécessaires, leur positionnement et les procédures d'urgence. Méfiez-vous des sociétés qui vous 
        proposent une solution standardisée sans étude approfondie de vos besoins.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Vérifiez les assurances et responsabilités</h2>
      <p className="mb-6">
        L'entreprise doit pouvoir couvrir tout incident par une assurance RC Pro. Demandez une attestation d'assurance 
        responsabilité civile professionnelle à jour et vérifiez les montants couverts. Cette précaution est essentielle 
        car en cas d'incident, vous pourriez être tenu pour responsable si votre prestataire n'est pas correctement assuré.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Conclusion</h2>
      <p className="mb-6">
        LeVigile est le partenaire de nombreux événements en Haute-Garonne, du petit concert local au grand salon professionnel. 
        Notre équipe d'experts peut vous accompagner dans la mise en place d'un dispositif de sécurité adapté à votre événement, 
        en respectant toutes les normes légales et en garantissant la meilleure expérience possible pour vos participants. 
        Demandez à nos experts un plan personnalisé pour votre prochain événement.
      </p>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Sécurité événementielle : comment choisir la bonne société ? | Blog LeVigile</title>
        <meta name="description" content="Découvrez comment sélectionner la meilleure société de sécurité pour vos événements : autorisations CNAPS, expérience, plan sur mesure et assurances." />
        <meta name="keywords" content="sécurité événementielle Haute-Garonne, agent sécurité concert, société sécurité salon professionnel" />
      </Helmet>

      <Header />

      <BlogArticle
        title="Sécurité événementielle : comment choisir la bonne société ?"
        subtitle="Guide pratique pour organisateurs d'événements"
        author="Marie Laurent"
        date="2025-03-28"
        readTime="6"
        featuredImage="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1562&auto=format&fit=crop"
        content={articleContent}
        tags={["Sécurité événementielle", "CNAPS", "Haute-Garonne", "Organisation événement"]}
        relatedArticles={[
          {
            id: "1",
            title: "5 conseils pour protéger votre commerce à Toulouse",
            image: "https://images.unsplash.com/photo-1613599229399-c7a78c1f6309?q=80&w=1170&auto=format&fit=crop",
            slug: "proteger-commerce-toulouse"
          },
          {
            id: "5",
            title: "Règlementation 2025 : ce que dit la loi sur la sécurité privée",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop",
            slug: "reglementation-2025-securite-privee"
          }
        ]}
        relatedServices={[
          {
            id: "4",
            title: "Sécurité événementielle",
            description: "Protection de concerts, salons et événements en Haute-Garonne",
            slug: "securite-evenementielle"
          },
          {
            id: "5",
            title: "Agents de sécurité certifiés",
            description: "Personnel qualifié et formé aux situations d'urgence",
            slug: "agents-securite"
          },
          {
            id: "6",
            title: "Audit de sécurité",
            description: "Évaluation des risques et recommandations personnalisées",
            slug: "audit-securite"
          }
        ]}
      />

      <Footer />
    </>
  );
};

export default SecuriteEvenementielle;
