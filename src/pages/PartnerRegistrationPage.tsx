import React from 'react';
import { Helmet } from 'react-helmet-async';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from 'react-router-dom';
import { FileUp, Mail, Phone, User, Calendar, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Le nom et prénom doivent faire au moins 2 caractères",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide",
  }),
  phone: z.string().min(10, {
    message: "Veuillez entrer un numéro de téléphone valide",
  }),
  address: z.string().optional(),
  type: z.enum(["particulier", "professionnel"], {
    required_error: "Veuillez sélectionner votre statut",
  }),
  hasExperience: z.enum(["oui", "non"], {
    required_error: "Veuillez indiquer votre expérience",
  }),
  geographicArea: z.string().min(2, {
    message: "Veuillez préciser votre zone géographique",
  }),
  isAdult: z.boolean().refine((val) => val === true, {
    message: "Vous devez certifier être majeur et ne pas être en conflit d'intérêts",
  }),
  acceptDataUsage: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter l'utilisation de vos données",
  }),
  understandCollaboration: z.boolean().refine((val) => val === true, {
    message: "Vous devez comprendre les conditions de collaboration",
  }),
})

const PartnerRegistrationPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "particulier",
      hasExperience: "non",
      isAdult: false,
      acceptDataUsage: false,
      understandCollaboration: false,
    },
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { data, error } = await supabase.functions.invoke('send-partner-registration', {
        body: values
      });

      if (error) throw error;

      toast({
        title: "Formulaire envoyé avec succès !",
        description: "Vous allez recevoir un email de confirmation. Nous vous contacterons prochainement.",
      });

      // Redirect to the partner page after submission
      setTimeout(() => {
        navigate('/devenir-partenaire');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
      });
    }
  }

  return (
    <>
      <Helmet>
        <title>Formulaire d'inscription - Rapporteur d'affaires | LeVigile</title>
        <meta 
          name="description" 
          content="Inscrivez-vous comme rapporteur d'affaires chez LeVigile et commencez à gagner des commissions en nous aidant à identifier de nouveaux besoins en sécurité." 
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">
                Formulaire d'inscription - Rapporteur d'affaires
              </h1>
              <p className="text-gray-600">
                Rejoignez notre réseau de rapporteurs d'affaires et développez une activité rémunératrice
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Section 1: Informations personnelles */}
                <div className="bg-white p-6 rounded-lg shadow space-y-6">
                  <h2 className="text-xl font-semibold">🔹 Informations personnelles</h2>
                  
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom et prénom *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input {...field} className="pl-10" />
                            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Adresse email *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input type="email" {...field} className="pl-10" />
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numéro de téléphone *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input type="tel" {...field} className="pl-10" />
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Adresse postale (facultative)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input {...field} className="pl-10" />
                            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Cette information nous aide à mieux cibler les opportunités dans votre zone
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Section 2: Profil du rapporteur */}
                <div className="bg-white p-6 rounded-lg shadow space-y-6">
                  <h2 className="text-xl font-semibold">🔹 Profil du rapporteur</h2>
                  
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Êtes-vous un particulier ou un professionnel ? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="particulier" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Particulier
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="professionnel" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Professionnel
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Avez-vous déjà fait ce type de mise en relation ? *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="oui" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Oui
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="non" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Non
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="geographicArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dans quel secteur/périmètre géographique souhaitez-vous proposer des opportunités ? *</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            placeholder="Ex: Toulouse et sa périphérie, Département de la Haute-Garonne..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Section 3: Conditions */}
                <div className="bg-white p-6 rounded-lg shadow space-y-6">
                  <h2 className="text-xl font-semibold">🔹 Conditions</h2>
                  
                  <FormField
                    control={form.control}
                    name="isAdult"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Je certifie avoir plus de 18 ans et ne pas être en conflit d'intérêts avec Levigile Sécurité Privée *
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="acceptDataUsage"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            J'accepte que mes données soient utilisées dans le cadre de cette collaboration *
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="understandCollaboration"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Je comprends que ma collaboration est sans lien de subordination (pas de contrat salarié) *
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Section 4: Validation */}
                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    className="bg-levigile-blue hover:bg-blue-700 text-white px-8 py-4"
                  >
                    Envoyer ma candidature
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PartnerRegistrationPage;
