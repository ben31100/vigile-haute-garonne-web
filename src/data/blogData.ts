import { BlogArticle, BlogAuthor, BlogTag, BlogArticlePreview } from '../types/blog';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

// Helper functions for blog data
export const formatBlogDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'dd MMMM yyyy', { locale: fr });
};

export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};

export const getRelatedArticles = (articleId: string): BlogArticlePreview[] => {
  const article = blogArticles.find(a => a.id === articleId);
  
  if (!article || !article.relatedArticles) {
    return [];
  }
  
  return article.relatedArticles
    .map(id => blogArticles.find(a => a.id === id))
    .filter((a): a is BlogArticle => !!a)
    .map(({ content, relatedArticles, ...rest }) => rest);
};

// Blog authors
export const blogAuthors: Record<string, BlogAuthor> = {
  admin: {
    id: 'admin',
    name: 'Admin LeVigile',
    avatar: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//favicon%20de%20la%20%20societe%20de%20securite%20levigile.png',
    role: 'Administrateur'
  },
  expert: {
    id: 'expert',
    name: 'Expert Sécurité',
    role: 'Consultant en sécurité'
  }
};

export const blogTags: Record<string, BlogTag> = {
  securite: {
    id: 'securite',
    name: 'Sécurité',
    slug: 'securite'
  },
  entreprise: {
    id: 'entreprise',
    name: 'Entreprise',
    slug: 'entreprise'
  },
  evenement: {
    id: 'evenement',
    name: 'Événements',
    slug: 'evenement'
  },
  conseil: {
    id: 'conseil',
    name: 'Conseils',
    slug: 'conseil'
  },
  incendie: {
    id: 'incendie',
    name: 'Sécurité Incendie',
    slug: 'incendie'
  },
  cynophile: {
    id: 'cynophile',
    name: 'Agent Cynophile',
    slug: 'cynophile'
  },
  chantier: {
    id: 'chantier',
    name: 'Chantier',
    slug: 'chantier'
  },
  residence: {
    id: 'residence',
    name: 'Résidentiel',
    slug: 'residence'
  }
};

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'comment-securiser-son-entreprise',
    title: 'Comment sécuriser efficacement son entreprise en 2025',
    subtitle: 'Découvrez les meilleures pratiques pour protéger votre entreprise',
    excerpt: "La sécurité des entreprises est devenue un enjeu majeur face à l'augmentation des risques. Cet article présente les solutions les plus efficaces pour protéger votre entreprise.",
    content: `
      <h2>Les risques actuels pour les entreprises</h2>
      <p>Dans un contexte où les menaces évoluent constamment, les entreprises doivent adapter leur stratégie de sécurité. Les risques d'intrusion, de vol de données ou de dégradation sont réels et peuvent avoir des conséquences désastreuses sur l'activité.</p>
      
      <p>Une étude récente montre que plus de 60% des petites et moyennes entreprises ont été victimes d'une tentative d'intrusion au cours des deux dernières années.</p>
      
      <h2>Les solutions de sécurité physique</h2>
      <p>Pour sécuriser efficacement les locaux de votre entreprise, plusieurs dispositifs complémentaires peuvent être mis en place :</p>
      
      <ul>
        <li>Contrôle d'accès : badges, biométrie, digicodes</li>
        <li>Vidéosurveillance : caméras IP, analytics vidéo</li>
        <li>Alarmes anti-intrusion : détecteurs de mouvement, contacts d'ouverture</li>
        <li>Agents de sécurité : présence humaine dissuasive et réactive</li>
      </ul>
      
      <h2>La protection des données</h2>
      <p>Au-delà de la sécurité physique, la protection des données est devenue un enjeu crucial pour toutes les entreprises, quelle que soit leur taille.</p>
      
      <p>La mise en place d'une politique de cybersécurité robuste est indispensable pour prévenir les risques de piratage et de vol de données sensibles.</p>
      
      <h2>L'importance d'une stratégie globale</h2>
      <p>Une approche efficace de la sécurité d'entreprise repose sur une vision globale des risques et des mesures à mettre en place. La coordination des différentes solutions et la sensibilisation des collaborateurs sont essentielles.</p>
      
      <blockquote>La sécurité n'est pas un produit, mais un processus. - Bruce Schneier</blockquote>
    `,
    publishedAt: '2025-03-15T10:00:00Z',
    readingTime: 8,
    coverImage: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//securitE-Evenementiel.jpg',
    author: blogAuthors.expert,
    tags: [blogTags.securite, blogTags.entreprise],
    relatedArticles: ['2', '3']
  },
  {
    id: '2',
    slug: 'securite-evenementielle',
    title: 'Sécurité événementielle : garantir le bon déroulement de vos manifestations',
    subtitle: 'Les clés pour organiser des événements sécurisés',
    excerpt: "Organiser un événement implique une responsabilité importante en matière de sécurité. Découvrez comment assurer la protection de vos participants et le bon déroulement de votre manifestation.",
    content: `
      <h2>Les enjeux de la sécurité événementielle</h2>
      <p>L'organisation d'un événement, qu'il s'agisse d'un salon professionnel, d'une convention d'entreprise ou d'un concert, comporte de nombreux défis en matière de sécurité. La protection des participants, des intervenants et des infrastructures nécessite une préparation minutieuse.</p>
      
      <h2>L'analyse préalable des risques</h2>
      <p>Avant toute mise en place de dispositif de sécurité, une analyse approfondie des risques spécifiques à l'événement est indispensable. Cette étape permet d'identifier les vulnérabilités et d'adapter les mesures en conséquence.</p>
      
      <p>Les facteurs à prendre en compte incluent :</p>
      <ul>
        <li>Le nombre de participants attendus</li>
        <li>Le profil du public</li>
        <li>La localisation et la configuration des lieux</li>
        <li>La nature de l'événement</li>
        <li>Le contexte géopolitique et social</li>
      </ul>
      
      <h2>Le dispositif humain</h2>
      <p>Les agents de sécurité constituent le pilier central de tout dispositif événementiel. Leur présence visible contribue à la dissuasion et permet une intervention rapide en cas d'incident.</p>
      
      <p>Le dimensionnement de l'équipe doit être calculé en fonction de la jauge de l'événement et des risques identifiés. Il est généralement recommandé de prévoir un agent pour 100 à 150 participants dans le cadre d'un événement standard.</p>
      
      <h2>La coordination avec les autorités</h2>
      <p>Pour les événements d'envergure, une coordination étroite avec les services de police, les pompiers et les services médicaux d'urgence est essentielle. L'élaboration d'un plan d'intervention commun permet d'optimiser la réactivité en cas d'incident majeur.</p>
      
      <h2>La communication de crise</h2>
      <p>Même avec une préparation optimale, des situations imprévues peuvent survenir. La mise en place d'un protocole de communication de crise permet de gérer efficacement ces situations et de limiter leur impact sur l'événement.</p>
      
      <blockquote>La meilleure improvisation est celle qui a été préparée. - Proverbe de sécurité événementielle</blockquote>
    `,
    publishedAt: '2025-02-20T14:30:00Z',
    readingTime: 10,
    coverImage: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20evenementielle%20levigile.png',
    author: blogAuthors.expert,
    tags: [blogTags.securite, blogTags.evenement],
    relatedArticles: ['1', '3']
  },
  {
    id: '3',
    slug: 'protection-commerces-toulouse',
    title: 'Protection des commerces à Toulouse : solutions adaptées',
    subtitle: 'Comment sécuriser efficacement votre commerce dans la ville rose',
    excerpt: "Face à l'augmentation des actes de malveillance, les commerces toulousains doivent renforcer leur sécurité. Découvrez les solutions spécifiquement adaptées au contexte local.",
    content: `
      <h2>La situation sécuritaire des commerces toulousains</h2>
      <p>Les commerces de Toulouse, comme dans de nombreuses grandes villes françaises, sont confrontés à diverses menaces : cambriolages, vols à l'étalage, agressions. Selon les statistiques récentes, le nombre d'incidents a augmenté de 15% au cours des deux dernières années.</p>
      
      <h2>Des solutions adaptées à chaque type de commerce</h2>
      <p>Chaque commerce présente des spécificités qui nécessitent une approche personnalisée en matière de sécurité. Une bijouterie n'aura pas les mêmes besoins qu'une supérette ou qu'un restaurant.</p>
      
      <h3>Pour les commerces à forte valeur ajoutée</h3>
      <p>Les bijouteries, les boutiques de luxe ou les magasins d'électronique nécessitent un niveau de protection renforcé :</p>
      <ul>
        <li>Vitrines sécurisées anti-effraction</li>
        <li>Systèmes d'alarme connectés aux centres de télésurveillance</li>
        <li>Brouillards opacifiants</li>
        <li>Présence d'agents de sécurité aux heures d'ouverture</li>
      </ul>
      
      <h3>Pour les commerces de proximité</h3>
      <p>Les épiceries, boulangeries et autres commerces de quartier peuvent opter pour des solutions plus légères mais néanmoins efficaces :</p>
      <ul>
        <li>Caméras de surveillance visibles</li>
        <li>Alarmes simples</li>
        <li>Formation du personnel aux bonnes pratiques</li>
      </ul>
      
      <h2>L'importance de la mutualisation</h2>
      <p>À Toulouse, plusieurs initiatives de mutualisation des moyens de sécurité ont vu le jour dans certaines zones commerciales. Ces approches collectives permettent de réduire les coûts tout en optimisant l'efficacité des dispositifs.</p>
      
      <h2>Le rôle des agents de sécurité</h2>
      <p>La présence d'agents de sécurité reste l'un des moyens les plus dissuasifs pour prévenir les actes de malveillance. À Toulouse, de nombreux commerces font appel à des sociétés locales qui connaissent parfaitement le terrain et ses spécificités.</p>
      
      <blockquote>La sécurité est un investissement, pas une dépense. - Association des commerçants toulousains</blockquote>
    `,
    publishedAt: '2025-01-10T09:15:00Z',
    readingTime: 7,
    coverImage: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//securite%20commerce%20levigie.webp',
    author: blogAuthors.admin,
    tags: [blogTags.securite, blogTags.conseil],
    relatedArticles: ['1', '2']
  },
  {
    id: '4',
    slug: 'tendances-securite-2025',
    title: 'Les grandes tendances de la sécurité privée en 2025',
    subtitle: 'Innovations et évolutions du secteur',
    excerpt: "Le secteur de la sécurité privée connaît une transformation majeure portée par les innovations technologiques et l'évolution des menaces. Découvrez les tendances qui façonnent le marché en 2025.",
    content: `
      <h2>L'intelligence artificielle au service de la sécurité</h2>
      <p>L'IA transforme profondément le secteur de la sécurité privée. Les systèmes de vidéosurveillance intelligents peuvent désormais analyser en temps réel les comportements suspects, identifier des objets abandonnés ou encore reconnaître des personnes recherchées.</p>
      
      <p>Ces technologies permettent d'optimiser le travail des agents de sécurité en les alertant uniquement lorsqu'une situation à risque est détectée.</p>
      
      <h2>La cybersécurité intégrée</h2>
      <p>La frontière entre sécurité physique et numérique s'estompe progressivement. Les entreprises de sécurité privée élargissent leur offre pour inclure des services de protection contre les cybermenaces.</p>
      
      <p>Cette approche globale répond à une réalité : aujourd'hui, une intrusion physique peut avoir pour objectif le vol de données numériques, et inversement, une attaque informatique peut compromettre des systèmes de sécurité physique.</p>
      
      <h2>L'essor des drones de surveillance</h2>
      <p>Les drones deviennent des outils incontournables pour la surveillance de sites étendus ou difficiles d'accès. Équipés de caméras haute définition et de capteurs spécialisés, ils permettent :</p>
      
      <ul>
        <li>La surveillance périmétrique de grands sites</li>
        <li>L'inspection rapide de zones isolées</li>
        <li>La couverture d'événements sur de vastes espaces</li>
      </ul>
      
      <h2>La réalité augmentée pour les agents</h2>
      <p>Les agents de sécurité commencent à s'équiper de dispositifs de réalité augmentée qui leur fournissent en temps réel des informations contextuelles sur leur environnement.</p>
      
      <p>Ces technologies permettent d'identifier instantanément des anomalies, de recevoir des consignes précises ou encore d'accéder aux plans des bâtiments surveillés.</p>
      
      <h2>La biométrie avancée</h2>
      <p>Les systèmes de contrôle d'accès par biométrie connaissent des avancées significatives. Au-delà de la reconnaissance faciale ou digitale, de nouvelles méthodes émergent :</p>
      
      <ul>
        <li>Reconnaissance de la démarche</li>
        <li>Analyse des modèles vasculaires</li>
        <li>Identification par le rythme cardiaque</li>
      </ul>
      
      <blockquote>L'innovation en matière de sécurité consiste à rester toujours une étape en avance sur les menaces. - Forum International de la Sécurité</blockquote>
    `,
    publishedAt: '2025-04-05T11:45:00Z',
    readingTime: 9,
    coverImage: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Les%20grandes%20tendances%20de%20la%20securite%20privee%20en%202025.png',
    author: blogAuthors.expert,
    tags: [blogTags.securite, blogTags.conseil],
    relatedArticles: ['1', '3']
  },
  {
    id: '5',
    slug: 'recrutement-agents-securite',
    title: 'Comment recruter et fidéliser les meilleurs agents de sécurité',
    subtitle: 'Stratégies RH pour le secteur de la sécurité privée',
    excerpt: "Dans un marché en tension, attirer et conserver les talents est un défi majeur pour les entreprises de sécurité. Découvrez les meilleures pratiques pour constituer et maintenir une équipe d'agents qualifiés.",
    content: `
      <h2>Un secteur en tension</h2>
      <p>Le secteur de la sécurité privée fait face à un paradoxe : alors que la demande ne cesse de croître, le recrutement d'agents qualifiés devient de plus en plus difficile. Cette situation s'explique par plusieurs facteurs :</p>
      
      <ul>
        <li>Une image parfois dévalorisée du métier</li>
        <li>Des conditions de travail perçues comme contraignantes</li>
        <li>Une concurrence accrue entre les entreprises du secteur</li>
        <li>Des exigences réglementaires renforcées</li>
      </ul>
      
      <h2>Attirer les bons profils</h2>
      <p>Pour se démarquer dans ce contexte concurrentiel, les entreprises doivent adopter des stratégies de recrutement innovantes :</p>
      
      <h3>Valoriser la profession</h3>
      <p>Mettre en avant les aspects positifs du métier : responsabilité, autonomie, diversité des missions, contribution à la sécurité collective.</p>
      
      <h3>Proposer des parcours d'évolution</h3>
      <p>Présenter dès le recrutement les possibilités d'évolution au sein de l'entreprise : chef d'équipe, formateur, responsable de site, etc.</p>
      
      <h3>Cibler de nouveaux viviers</h3>
      <p>Élargir les recherches vers des profils variés : reconversions professionnelles, jeunes diplômés en recherche d'une première expérience, personnes issues de secteurs connexes (armée, police, pompiers).</p>
      
      <h2>La formation continue comme levier de fidélisation</h2>
      <p>Au-delà de la formation initiale obligatoire, proposer un programme complet de formation continue présente de nombreux avantages :</p>
      
      <ul>
        <li>Renforcement des compétences et de la confiance des agents</li>
        <li>Adaptation aux évolutions technologiques et réglementaires</li>
        <li>Possibilité d'acquérir des spécialisations valorisantes</li>
        <li>Sentiment d'investissement de l'entreprise envers ses collaborateurs</li>
      </ul>
      
      <h2>L'importance du management de proximité</h2>
      <p>La qualité du management joue un rôle crucial dans la fidélisation des agents. Un encadrement attentif et bienveillant favorise :</p>
      
      <ul>
        <li>Le sentiment d'appartenance à l'entreprise</li>
        <li>La reconnaissance du travail accompli</li>
        <li>La résolution rapide des difficultés rencontrées sur le terrain</li>
        <li>La transmission des valeurs et de la culture d'entreprise</li>
      </ul>
      
      <blockquote>Un agent bien formé et bien encadré est un agent qui reste. - Association des DRH de la sécurité privée</blockquote>
    `,
    publishedAt: '2024-12-12T08:30:00Z',
    readingTime: 8,
    coverImage: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Comment%20recruter,levigile.png',
    author: blogAuthors.admin,
    tags: [blogTags.entreprise, blogTags.conseil],
    relatedArticles: ['1', '4']
  },
  {
    id: '6',
    slug: 'differences-gardiennage-surveillance-mobile',
    title: 'Différences entre gardiennage et surveillance mobile',
    subtitle: 'Comprendre les spécificités de chaque service pour mieux choisir',
    excerpt: "Gardiennage ou surveillance mobile ? Ces deux prestations sont souvent confondues. Voici leurs différences, pour mieux choisir votre solution de sécurité.",
    content: `
      <h2>Gardiennage : présence continue sur site</h2>
      <p>Un agent reste en poste sur votre site (commerce, chantier, entrepôt), 24h/24 ou en horaires définis. Cette présence permanente offre plusieurs avantages :</p>
      <ul>
        <li>Réactivité immédiate en cas d'incident</li>
        <li>Effet dissuasif renforcé</li>
        <li>Possibilité d'assurer des tâches complémentaires (accueil, contrôle d'accès)</li>
      </ul>
      
      <h2>Surveillance mobile : rondes à horaires définis ou aléatoires</h2>
      <p>L'agent se déplace d'un site à l'autre, souvent la nuit, pour contrôler que tout est en ordre. Cette solution présente des caractéristiques spécifiques :</p>
      <ul>
        <li>Couverture de plusieurs sites</li>
        <li>Flexibilité des horaires de passage</li>
        <li>Rapport détaillé après chaque ronde</li>
      </ul>
      
      <h2>Coûts et flexibilité</h2>
      <p>Le gardiennage est plus coûteux mais permanent ; la surveillance mobile est plus souple. Voici un comparatif des aspects économiques :</p>
      
      <h3>Gardiennage</h3>
      <ul>
        <li>Coût plus élevé (présence continue)</li>
        <li>Engagement sur une durée déterminée</li>
        <li>Service personnalisable selon vos besoins</li>
      </ul>
      
      <h3>Surveillance mobile</h3>
      <ul>
        <li>Coût optimisé (mutualisation entre clients)</li>
        <li>Formules flexibles</li>
        <li>Adaptable selon les périodes</li>
      </ul>
      
      <h2>Quel choix selon vos besoins ?</h2>
      <p>Commerce, chantier, immeuble : chaque contexte a une solution adaptée. Voici quelques recommandations :</p>
      
      <h3>Optez pour le gardiennage si :</h3>
      <ul>
        <li>Vous avez des biens de grande valeur</li>
        <li>Vous souhaitez une présence humaine permanente</li>
        <li>Vous avez besoin d'un service d'accueil en parallèle</li>
      </ul>
      
      <h3>La surveillance mobile est préférable pour :</h3>
      <ul>
        <li>Les petites structures</li>
        <li>Les sites fermés la nuit</li>
        <li>Les budgets plus restreints</li>
      </ul>
      
      <blockquote>La meilleure solution dépend de vos besoins spécifiques et de votre budget. N'hésitez pas à nous contacter pour une étude personnalisée.</blockquote>
    `,
    publishedAt: '2025-04-15T09:00:00Z',
    readingTime: 6,
    coverImage: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//gardiennage-hero.jpg',
    author: blogAuthors.expert,
    tags: [blogTags.securite, blogTags.conseil],
    relatedArticles: ['1', '2']
  },
  {
    id: '7',
    slug: 'agent-securite-nuit-colomiers',
    title: 'Pourquoi opter pour un agent de sécurité la nuit à Colomiers',
    subtitle: 'Protection nocturne adaptée pour les entreprises columérines',
    excerpt: "Colomiers, deuxième ville de Haute-Garonne, connaît une forte activité nocturne, mais aussi des risques accrus pour les entreprises. Voici pourquoi un agent de sécurité la nuit est une solution à envisager.",
    content: `
      <h2>Prévenir les intrusions en zones industrielles</h2>
      <p>Les parcs d'activités de Colomiers sont souvent ciblés en dehors des heures ouvrées. Une présence de sécurité nocturne permet :</p>
      <ul>
        <li>La dissuasion des tentatives d'intrusion</li>
        <li>Une intervention immédiate en cas d'incident</li>
        <li>Des rondes régulières sur l'ensemble du site</li>
        <li>La vérification des points sensibles</li>
      </ul>
      
      <h2>Rassurer vos employés et partenaires</h2>
      <p>Un site sécurisé attire la confiance de tous. La présence d'un agent de sécurité la nuit apporte :</p>
      <ul>
        <li>Un sentiment de sécurité pour les employés en horaires décalés</li>
        <li>Une image professionnelle auprès des clients et partenaires</li>
        <li>Une garantie de protection de vos biens et équipements</li>
      </ul>
      
      <h2>Réduction des coûts avec une surveillance mutualisée</h2>
      <p>LeVigile propose des agents partagés pour des sites proches, permettant :</p>
      <ul>
        <li>Une optimisation des coûts de sécurité</li>
        <li>Une couverture efficace de plusieurs sites</li>
        <li>Une flexibilité des horaires selon vos besoins</li>
      </ul>
      
      <h3>Les avantages de notre service de sécurité nocturne à Colomiers</h3>
      <ul>
        <li>Agents qualifiés et formés</li>
        <li>Intervention rapide en cas d'alerte</li>
        <li>Rapport détaillé des activités nocturnes</li>
        <li>Coordination avec les forces de l'ordre si nécessaire</li>
      </ul>
      
      <blockquote>Vous avez un commerce, un entrepôt ou un bureau à Colomiers ? Un agent de sécurité de nuit est votre meilleur allié. Contactez-nous pour une étude personnalisée de vos besoins.</blockquote>
    `,
    publishedAt: '2025-04-16T10:00:00Z',
    readingTime: 5,
    coverImage: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//ronde-hero.jpg',
    author: blogAuthors.expert,
    tags: [blogTags.securite, blogTags.entreprise],
    relatedArticles: ['6', '2']
  },
  {
    id: '8',
    slug: 'reglementation-securite-privee-2025',
    title: 'Règlementation 2025 : ce que dit la loi sur la sécurité privée',
    subtitle: 'Les nouvelles exigences légales pour la sécurité privée',
    excerpt: "Le secteur de la sécurité privée est encadré par la loi, et 2025 apporte son lot de nouveautés. Voici ce qu'il faut savoir.",
    content: `
      <h2>Mise à jour des formations obligatoires</h2>
      <p>Les agents doivent suivre des formations continues certifiées pour maintenir leur niveau de compétence et leur autorisation d'exercer. Ces formations incluent :</p>
      <ul>
        <li>La mise à niveau des compétences techniques</li>
        <li>L'actualisation des connaissances juridiques</li>
        <li>Le recyclage des gestes de premiers secours</li>
        <li>Les nouvelles procédures de sécurité</li>
      </ul>
      
      <h2>Renforcement du contrôle par le CNAPS</h2>
      <p>Le Conseil National des Activités Privées de Sécurité (CNAPS) renforce ses contrôles en 2025. Les points clés incluent :</p>
      <ul>
        <li>Des audits plus fréquents des sociétés de sécurité</li>
        <li>Des vérifications approfondies des antécédents du personnel</li>
        <li>Un suivi régulier des autorisations et agréments</li>
        <li>Des sanctions renforcées en cas de non-conformité</li>
      </ul>
      
      <h2>Équipements réglementés</h2>
      <p>La réglementation précise les équipements obligatoires et leurs normes :</p>
      <ul>
        <li>Uniformes aux couleurs et insignes réglementaires</li>
        <li>Badges d'identification visibles et conformes</li>
        <li>Équipements de communication homologués</li>
        <li>Registres et documents obligatoires à jour</li>
      </ul>
      
      <h2>Impact pour les clients</h2>
      <p>Les entreprises faisant appel à des services de sécurité privée doivent également se conformer à certaines obligations :</p>
      <ul>
        <li>Vérification de l'agrément du prestataire</li>
        <li>Contrôle des autorisations individuelles des agents</li>
        <li>Respect des conditions d'exercice sur site</li>
        <li>Conservation des documents contractuels obligatoires</li>
      </ul>
      
      <blockquote>Chez LeVigile, nous anticipons chaque évolution réglementaire pour vous garantir une sécurité 100% légale et à jour. N'hésitez pas à nous contacter pour plus d'informations sur la conformité de nos services.</blockquote>
      
      <p>Pour plus d'informations officielles, consultez le site du <a href="https://www.cnaps.interieur.gouv.fr/" target="_blank" rel="noopener noreferrer">CNAPS</a>.</p>
    `,
    publishedAt: '2025-04-17T09:00:00Z',
    readingTime: 7,
    coverImage: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Le-CNAPS-Reglementation%202025.jpg',
    author: blogAuthors.expert,
    tags: [blogTags.securite, blogTags.conseil],
    relatedArticles: ['1', '4']
  },
  {
    id: '9',
    slug: 'securite-incendie-obligations-entreprises-haute-garonne',
    title: 'Sécurité incendie : les obligations légales pour les entreprises en Haute-Garonne',
    subtitle: 'Guide complet des responsabilités et obligations en matière de sécurité incendie',
    excerpt: "En Haute-Garonne, toutes les entreprises ont des obligations strictes en matière de sécurité incendie. Quelles sont-elles ? Quels sont les risques en cas de non-respect ? On vous explique tout.",
    content: `
      <h2>Connaître la réglementation ERP et code du travail</h2>
      <p>La réglementation en matière de sécurité incendie repose sur deux piliers principaux :</p>
      <ul>
        <li>Le Code du Travail qui impose des obligations pour la protection des salariés</li>
        <li>La réglementation ERP (Établissement Recevant du Public) pour les entreprises accueillant du public</li>
      </ul>
      
      <h2>Installer les équipements obligatoires</h2>
      <p>Plusieurs équipements sont obligatoires selon la taille et l'activité de votre entreprise :</p>
      <ul>
        <li>Extincteurs adaptés aux types de risques présents</li>
        <li>Système d'alarme incendie conforme aux normes</li>
        <li>Plans d'évacuation et consignes de sécurité</li>
        <li>Éclairage de sécurité et issues de secours</li>
      </ul>
      
      <h2>Former les salariés à la sécurité incendie</h2>
      <p>La formation du personnel est une obligation légale qui comprend :</p>
      <ul>
        <li>Formation aux gestes de premiers secours</li>
        <li>Exercices réguliers d'évacuation</li>
        <li>Sensibilisation à l'utilisation des extincteurs</li>
        <li>Connaissance des procédures d'urgence</li>
      </ul>
      
      <h2>L'importance des agents SSIAP</h2>
      <p>Pour certains établissements, la présence d'agents SSIAP (Service de Sécurité Incendie et d'Assistance à Personnes) est obligatoire :</p>
      <ul>
        <li>Surveillance permanente des systèmes de sécurité</li>
        <li>Intervention rapide en cas de début d'incendie</li>
        <li>Organisation des évacuations</li>
        <li>Accueil et guidage des secours</li>
      </ul>
      
      <h2>Les risques en cas de non-respect</h2>
      <p>Le non-respect des obligations en matière de sécurité incendie peut entraîner :</p>
      <ul>
        <li>Des sanctions administratives</li>
        <li>Des amendes importantes</li>
        <li>La fermeture temporaire ou définitive de l'établissement</li>
        <li>Des poursuites pénales en cas d'accident</li>
      </ul>
      
      <blockquote>Chez LeVigile, nos agents SSIAP qualifiés vous accompagnent dans la mise en conformité de votre établissement. Contactez-nous pour une étude personnalisée de vos besoins en sécurité incendie.</blockquote>
    `,
    publishedAt: '2025-04-18T10:30:00Z',
    readingTime: 8,
    coverImage: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20incendie%20levigile.jpg',
    author: blogAuthors.expert,
    tags: [blogTags.securite, blogTags.entreprise, blogTags.incendie],
    relatedArticles: ['1', '8']
  },
  {
    id: '10',
    slug: 'agent-cynophile-maitre-chien',
    title: 'Agent cynophile : dans quels cas faire appel à un maître-chien ?',
    subtitle: 'Découvrez quand un agent de sécurité avec chien devient indispensable',
    excerpt: "L'agent cynophile (ou maître-chien) est un professionnel redoutablement efficace dans certaines situations. Mais quand est-il réellement indispensable ?",
    content: `
      <h2>Surveillance de chantiers ou entrepôts isolés la nuit</h2>
      <p>Les sites isolés sont particulièrement vulnérables aux intrusions nocturnes. L'agent cynophile apporte une solution de sécurité optimale grâce à :</p>
      <ul>
        <li>La capacité de détection accrue du chien</li>
        <li>L'effet dissuasif de la présence canine</li>
        <li>La mobilité et la rapidité d'intervention du binôme</li>
        <li>La couverture efficace de grandes surfaces</li>
      </ul>
      
      <h2>Sécurisation d'événements avec risques d'intrusion</h2>
      <p>Lors d'événements majeurs, l'agent cynophile renforce significativement le dispositif de sécurité :</p>
      <ul>
        <li>Contrôle des accès et des périmètres</li>
        <li>Détection précoce des comportements suspects</li>
        <li>Dissuasion efficace des tentatives d'intrusion</li>
        <li>Intervention rapide en cas d'incident</li>
      </ul>
      
      <h2>Patrouilles dissuasives en zones industrielles</h2>
      <p>Les zones industrielles nécessitent une surveillance particulière que les équipes cynophiles assurent efficacement :</p>
      <ul>
        <li>Rondes régulières sur l'ensemble du site</li>
        <li>Vérification approfondie des points sensibles</li>
        <li>Détection des anomalies grâce aux capacités canines</li>
        <li>Présence visible et dissuasive</li>
      </ul>
      
      <h2>Capacité à détecter rapidement les intrusions</h2>
      <p>Les capacités sensorielles du chien, combinées à l'expertise du maître, offrent des avantages uniques :</p>
      <ul>
        <li>Détection olfactive supérieure</li>
        <li>Repérage auditif performant</li>
        <li>Réactivité immédiate aux situations suspectes</li>
        <li>Efficacité même dans l'obscurité</li>
      </ul>
      
      <blockquote>LeVigile dispose d'équipes cynophiles professionnelles, disponibles 7j/7 pour répondre à vos besoins spécifiques de sécurité. Contactez-nous pour une évaluation personnalisée de vos besoins.</blockquote>
    `,
    publishedAt: '2025-04-19T08:00:00Z',
    readingTime: 6,
    coverImage: 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Agent%20cynophile%20levigile.png',
    author: blogAuthors.expert,
    tags: [blogTags.securite, blogTags.cynophile],
    relatedArticles: ['1', '7']
  },
  {
    id: '11',
    slug: 'surveillance-residences-toulouse',
    title: 'Surveillance de résidences : une solution contre les cambriolages en périphérie toulousaine',
    subtitle: 'Protection efficace pour les quartiers résidentiels',
    excerpt: "Cambriolages, incivilités, rodéos urbains... Les résidents des communes périphériques de Toulouse s'inquiètent. La surveillance privée est-elle une solution viable ?",
    content: `
      <h2>La sécurité résidentielle, une préoccupation croissante</h2>
      <p>Dans un contexte où les habitants des quartiers résidentiels de la périphérie toulousaine expriment des inquiétudes grandissantes face aux incidents, la surveillance privée apparaît comme une solution de plus en plus plébiscitée.</p>
      
      <h2>Des rondes efficaces et dissuasives</h2>
      <p>Notre service
