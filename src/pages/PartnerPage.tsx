
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, CheckCircle2, ArrowRight, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const PartnerPage = () => {
  const handlePhoneCall = () => {
    window.location.href = 'tel:+33554546428';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:contact@levigile.fr';
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/levigile', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33780817979', '_blank');
  };

  const handleSecondPhoneCall = () => {
    window.location.href = 'tel:+33780817979';
  };

  const handleSecondEmail = () => {
    window.location.href = 'mailto:levigile31@gmail.com';
  };

  return (
    <>
      <Helmet>
        <title>Devenir partenaire | Levigile - Sécurité privée</title>
        <meta 
          name="description" 
          content="Devenez rapporteur d'affaires avec Levigile et gagnez des commissions en nous aidant à identifier de nouveaux besoins en sécurité." 
        />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-levigile-blue to-levigile-gray text-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 items-center py-16 gap-8">
            <div className="space-y-6 z-10">
              <h1 className="text-3xl md:text-4xl font-bold">
                Devenir Rapporteur d'Affaires avec Levigile Sécurité Privée
              </h1>
              <p className="text-lg opacity-90">
                Valorisez votre réseau et soyez rémunéré pour chaque mission que vous nous confiez.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={handlePhoneCall}
                  className="bg-levigile-red hover:bg-red-600 text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Nous appeler
                </Button>
                <Button 
                  onClick={handleEmail}
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Nous contacter
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Devenir%20partenaire%20levigile.webp"
                alt="Devenir partenaire Levigile" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <p className="text-lg">👋 Bienvenue sur notre espace dédié aux rapporteurs d'affaires !</p>
              <p className="text-xl">
                Vous souhaitez valoriser votre réseau, tout en étant rémunéré pour chaque mission que vous nous confiez ?
              </p>
              <p className="text-gray-600">
                Levigile Sécurité Privée vous offre l'opportunité de devenir acteur de notre développement, 
                en nous aidant à identifier de nouveaux besoins en sécurité (gardiennage, événements, interventions, etc.).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">1️⃣ Qu'est-ce qu'un rapporteur d'affaires ?</h2>
              <p className="text-gray-600">
                Un rapporteur d'affaires est une personne (particulier ou professionnel) qui met en relation 
                Levigile avec une entreprise, une collectivité ou un particulier ayant besoin de prestations 
                de sécurité.
              </p>
              <p className="text-gray-600">
                Dès que la mission est confirmée et signée, vous touchez une commission.
              </p>
              <p className="text-gray-600">
                Vous devenez ainsi un partenaire externe, sans contrat de travail, mais avec une collaboration 
                claire, transparente et légale.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">2️⃣ Comment devenir rapporteur d'affaires ?</h2>
              <p className="text-gray-600">Rien de plus simple ! Pour rejoindre notre réseau de rapporteurs :</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  <div>
                    Remplissez le formulaire d'inscription en ligne{" "}
                    <Link 
                      to="/devenir-partenaire/inscription" 
                      className="text-levigile-blue hover:underline font-medium"
                    >
                      (Cliquez ici)
                    </Link>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Ou contactez-nous directement information contact en dessous de la page
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Nous vous expliquons le fonctionnement, validons votre profil et vous êtes prêt à démarrer
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">3️⃣ Conditions légales et éthiques</h2>
              <p className="text-gray-600">Notre démarche est encadrée et conforme aux règles du secteur.</p>
              <p className="text-gray-600">Pour devenir rapporteur d'affaires avec Levigile, il faut :</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Être majeur et juridiquement capable
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Ne pas être en situation de conflit d'intérêts
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Agir de manière transparente et loyale
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Ne pas promettre de prestations non validées par notre société
                </li>
              </ul>
              <p className="text-gray-600">
                Un accord de collaboration simple vous sera proposé pour sécuriser nos échanges.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">4️⃣ Quels sont les avantages pour vous ?</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Commission attractive : un pourcentage de la valeur du contrat signé
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Prime de fidélité : bonus si vous rapportez plusieurs projets dans l'année
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Liberté totale : vous proposez des opportunités à votre rythme
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Aucun investissement : aucun coût, aucune obligation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-levigile-blue h-5 w-5 flex-shrink-0" />
                  Reconnaissance : vous contribuez à sécuriser des personnes et des lieux
                </li>
              </ul>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-semibold">👉 Par exemple :</p>
                <p>Pour un contrat de 10000 € signé, vous pouvez percevoir jusqu'à 5 % de commission, soit 500 €.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">5️⃣ Prêt à rejoindre l'aventure ?</h2>
              <p className="text-gray-600">
                Nous sommes toujours à la recherche de partenaires motivés et connectés à leur environnement local.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-levigile-blue h-5 w-5" />
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="outline" 
                        className="bg-white hover:bg-levigile-blue hover:text-white transition-colors text-levigile-blue border-levigile-blue"
                        onClick={handlePhoneCall}
                      >
                        05 54 54 64 28
                      </Button>
                      <Button 
                        variant="outline" 
                        className="bg-white hover:bg-levigile-blue hover:text-white transition-colors text-levigile-blue border-levigile-blue"
                        onClick={handleSecondPhoneCall}
                      >
                        07 80 81 79 79
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="text-levigile-blue h-5 w-5" />
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="outline"
                        className="bg-white hover:bg-levigile-blue hover:text-white transition-colors text-levigile-blue border-levigile-blue"
                        onClick={handleEmail}
                      >
                        contact@levigile.fr
                      </Button>
                      <Button 
                        variant="outline"
                        className="bg-white hover:bg-levigile-blue hover:text-white transition-colors text-levigile-blue border-levigile-blue"
                        onClick={handleSecondEmail}
                      >
                        levigile31@gmail.com
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Button 
                      onClick={handleTelegramClick}
                      className="bg-[#0088cc] hover:bg-[#0077b5] text-white flex items-center justify-center gap-2 w-full"
                    >
                      <Send className="h-5 w-5" />
                      Nous contacter sur Telegram
                    </Button>
                    
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2 w-full"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Nous contacter sur WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="font-semibold">Levigile Sécurité Privée — Ensemble, sécurisons ce qui compte.</p>
              <p className="text-gray-600">Gagnez de l'argent tout en nous aidant à protéger.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PartnerPage;
