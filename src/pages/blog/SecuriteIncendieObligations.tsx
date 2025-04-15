
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import BlogArticle from '@/components/blog/BlogArticle';

const SecuriteIncendieObligations: React.FC = () => {
  const articleContent = (
    <>
      <p className="mb-6 text-lg">
        En Haute-Garonne, toutes les entreprises ont des obligations strictes en matière de sécurité incendie. 
        Quelles sont-elles ? Quels sont les risques en cas de non-respect ? Dans cet article, nous 
        vous expliquons tout ce que vous devez savoir pour être en conformité avec la réglementation.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Connaître la réglementation ERP et code du travail</h2>
      <p className="mb-6">
        La réglementation en matière de sécurité incendie est principalement définie par deux textes : le règlement 
        de sécurité contre l'incendie dans les ERP (Établissements Recevant du Public) et le Code du travail pour 
        tous les locaux professionnels. Selon la taille et l'activité de votre entreprise, les exigences peuvent varier, 
        mais certaines obligations sont communes à tous les établissements.
      </p>

      <figure className="my-8">
        <img 
          src="/lovable-uploads/95d1d3d2-2323-40fb-9947-ca8e35e7a9f2.png" 
          alt="Équipements de sécurité incendie obligatoires" 
          className="w-full rounded-lg shadow-md"
        />
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          Les équipements de sécurité incendie sont obligatoires dans toute entreprise
        </figcaption>
      </figure>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Installer les équipements obligatoires</h2>
      <p className="mb-6">
        Chaque entreprise, quelle que soit sa taille, doit disposer d'équipements de prévention et de lutte contre 
        l'incendie adaptés aux risques spécifiques de son activité. Parmi les éléments essentiels à installer :
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Des extincteurs adaptés aux risques présents (1 pour 200m² au minimum)</li>
        <li>Un système d'alarme incendie permettant d'alerter rapidement l'ensemble du personnel</li>
        <li>Des plans d'évacuation affichés à chaque étage et aux points stratégiques</li>
        <li>Un balisage des issues de secours par des blocs autonomes d'éclairage de sécurité (BAES)</li>
        <li>Des portes coupe-feu pour certains locaux à risque</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Former les salariés</h2>
      <p className="mb-6">
        La formation du personnel est un élément clé de la prévention des incendies. En effet, le Code du travail 
        impose aux employeurs d'organiser une formation pratique à la sécurité incendie pour l'ensemble des salariés. 
        Cette formation doit comprendre :
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>L'apprentissage des consignes de sécurité et du signal d'alarme</li>
        <li>La connaissance des moyens de secours et leur utilisation</li>
        <li>Les procédures d'évacuation et l'organisation d'exercices réguliers</li>
        <li>La formation aux gestes de premiers secours pour certains salariés désignés</li>
      </ul>
      <p className="mb-6">
        Ces formations doivent être régulièrement renouvelées pour maintenir la vigilance et actualiser les connaissances 
        des salariés face aux risques d'incendie.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Faire appel à un agent SSIAP</h2>
      <p className="mb-6">
        Pour certains établissements, en particulier les ERP de catégories 1, 2 et parfois 3, la présence d'un 
        agent SSIAP (Service de Sécurité Incendie et d'Assistance à Personnes) est obligatoire. Ces professionnels 
        sont spécifiquement formés pour :
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Assurer la prévention des incendies</li>
        <li>Sensibiliser le personnel aux risques spécifiques</li>
        <li>Effectuer des rondes de surveillance</li>
        <li>Intervenir rapidement en cas de début d'incendie</li>
        <li>Organiser l'évacuation du public et faciliter l'intervention des secours</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Conséquences du non-respect des obligations</h2>
      <p className="mb-6">
        Le non-respect des obligations en matière de sécurité incendie peut avoir des conséquences graves :
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Sanctions administratives pouvant aller jusqu'à la fermeture de l'établissement</li>
        <li>Amendes significatives en cas de contrôle</li>
        <li>Responsabilité pénale engagée en cas d'accident</li>
        <li>Refus de prise en charge par les assurances en cas de sinistre</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-levigile-dark">Conclusion</h2>
      <p className="mb-6">
        La sécurité incendie est un sujet qui ne doit pas être pris à la légère par les entreprises. Au-delà des obligations 
        légales, c'est avant tout une question de protection des personnes et des biens. LeVigile propose des agents 
        qualifiés SSIAP pour vous aider à respecter vos obligations en toute tranquillité. Nos équipes peuvent également 
        vous conseiller sur les mesures à mettre en place et vous accompagner dans la formation de votre personnel.
      </p>
      <p className="mb-6">
        N'attendez pas un contrôle ou un accident pour vous mettre en conformité. Contactez-nous pour évaluer vos besoins 
        en matière de sécurité incendie et bénéficiez de notre expertise en Haute-Garonne.
      </p>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Sécurité incendie : obligations légales pour entreprises en Haute-Garonne | Blog LeVigile</title>
        <meta name="description" content="Découvrez les obligations légales en matière de sécurité incendie pour les entreprises en Haute-Garonne : équipements obligatoires, formation du personnel et agents SSIAP." />
        <meta name="keywords" content="sécurité incendie entreprise Haute-Garonne, obligations incendie Toulouse, agent SSIAP 31, réglementation incendie" />
      </Helmet>

      <Header />

      <BlogArticle
        title="Sécurité incendie : les obligations légales pour les entreprises en Haute-Garonne"
        subtitle="Guide complet des exigences et solutions pour être en conformité"
        author="Samir Benhalima"
        date="2025-04-05"
        readTime="7"
        featuredImage="/lovable-uploads/95d1d3d2-2323-40fb-9947-ca8e35e7a9f2.png"
        content={articleContent}
        tags={["Sécurité incendie", "SSIAP", "Réglementation", "Haute-Garonne"]}
        relatedArticles={[
          {
            id: "5",
            title: "Règlementation 2025 : ce que dit la loi sur la sécurité privée",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop",
            slug: "reglementation-2025-securite-privee"
          },
          {
            id: "6",
            title: "Les meilleures pratiques de sécurité pour les entreprises en 2025",
            image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1470&auto=format&fit=crop",
            slug: "pratiques-securite-2025"
          }
        ]}
        relatedServices={[
          {
            id: "1",
            title: "Sécurité incendie",
            description: "Agents SSIAP qualifiés pour la protection contre les risques d'incendie",
            slug: "securite-incendie"
          },
          {
            id: "2",
            title: "Formation du personnel",
            description: "Sensibilisation et formation aux risques incendie pour vos équipes",
            slug: "formation-securite"
          },
          {
            id: "3",
            title: "Audit de sécurité",
            description: "Évaluation de conformité et recommandations personnalisées",
            slug: "audit-securite"
          }
        ]}
      />

      <Footer />
    </>
  );
};

export default SecuriteIncendieObligations;
