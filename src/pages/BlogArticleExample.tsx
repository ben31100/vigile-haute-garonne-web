
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import BlogArticle from '@/components/blog/BlogArticle';

const BlogArticleExample: React.FC = () => {
  // Exemple de contenu d'article formaté en JSX
  const articleContent = (
    <>
      <p>
        La sécurité est un enjeu majeur pour les entreprises et les particuliers en Haute-Garonne. 
        Face à l'évolution des risques, il est essentiel de mettre en place des stratégies efficaces 
        pour protéger les biens et les personnes.
      </p>
      
      <h2>Les enjeux de la sécurité privée en 2025</h2>
      
      <p>
        Le secteur de la sécurité privée connaît des transformations importantes, notamment avec 
        l'intégration des nouvelles technologies. La digitalisation des services de sécurité 
        permet désormais une surveillance accrue et une réactivité optimale face aux incidents.
      </p>
      
      <blockquote>
        La sécurité n'est pas simplement une question de moyens, mais avant tout une question 
        de méthode et d'expertise.
      </blockquote>
      
      <h3>L'importance de la formation des agents</h3>
      
      <p>
        Un dispositif de sécurité n'est efficace que si les agents qui le composent sont 
        correctement formés. Chez LeVigile, nous investissons constamment dans la formation 
        de nos équipes pour garantir un service de qualité.
      </p>
      
      <ul>
        <li>Formation aux premiers secours</li>
        <li>Maîtrise des outils technologiques</li>
        <li>Gestion des situations de crise</li>
        <li>Techniques de prévention des risques</li>
      </ul>
      
      <h2>Les solutions adaptées à chaque secteur</h2>
      
      <p>
        Chaque entreprise présente des spécificités qui nécessitent des approches sur mesure 
        en matière de sécurité. Notre expertise nous permet d'adapter nos services aux besoins 
        spécifiques de chaque secteur.
      </p>
      
      <figure>
        <img 
          src="https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1470&auto=format&fit=crop" 
          alt="Services de sécurité adaptés" 
          className="w-full max-w-2xl"
        />
        <figcaption>Notre équipe intervient dans de nombreux secteurs d'activité</figcaption>
      </figure>
      
      <h3>Le cas des commerces</h3>
      
      <p>
        Les commerces font face à des défis spécifiques en matière de sécurité. La prévention 
        des vols, la gestion des accès et la protection du personnel nécessitent une approche globale.
      </p>
      
      <ol>
        <li>Audit de sécurité complet</li>
        <li>Installation de systèmes de surveillance adaptés</li>
        <li>Formation du personnel aux bonnes pratiques</li>
        <li>Mise en place de procédures d'urgence</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>
        La sécurité est un investissement essentiel pour toute organisation soucieuse de protéger 
        ses actifs et son personnel. En choisissant un partenaire expérimenté comme LeVigile, 
        vous bénéficiez d'une expertise reconnue et d'un service personnalisé pour répondre 
        à vos besoins spécifiques.
      </p>
      
      <p>
        N'hésitez pas à <a href="/contact">nous contacter</a> pour discuter de vos projets de sécurité.
      </p>
    </>
  );

  // Articles connexes
  const relatedArticles = [
    {
      id: '1',
      title: 'Les tendances en sécurité privée pour 2025',
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop",
      slug: 'tendances-securite-privee-2025'
    },
    {
      id: '2',
      title: 'Comment sécuriser efficacement un événement',
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1562&auto=format&fit=crop",
      slug: 'securiser-evenement'
    }
  ];

  // Services connexes
  const relatedServices = [
    {
      id: '1',
      title: 'Gardiennage',
      description: 'Protection 24/7 de vos locaux professionnels',
      slug: 'gardiennage'
    },
    {
      id: '2',
      title: 'Événementiel',
      description: 'Sécurisation complète de vos événements',
      slug: 'evenementiel'
    },
    {
      id: '3',
      title: 'Sécurité incendie',
      description: 'Prévention et gestion des risques d\'incendie',
      slug: 'securite-incendie'
    }
  ];

  const articleData = {
    title: "Les meilleures pratiques de sécurité pour les entreprises en 2025",
    subtitle: "Guide complet pour optimiser votre dispositif de sécurité",
    author: "Thomas Dupont",
    date: "2025-03-15",
    readTime: "8",
    featuredImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1470&auto=format&fit=crop",
    content: articleContent,
    tags: ["Sécurité entreprise", "Gardiennage", "Prévention"],
    relatedArticles: relatedArticles,
    relatedServices: relatedServices
  };

  return (
    <>
      <Helmet>
        <title>{articleData.title} | Blog LeVigile</title>
        <meta name="description" content={articleData.subtitle} />
      </Helmet>
      
      <Header />
      
      <BlogArticle {...articleData} />
      
      <Footer />
    </>
  );
};

export default BlogArticleExample;
