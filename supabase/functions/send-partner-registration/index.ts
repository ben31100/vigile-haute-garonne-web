
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { MailerSend, EmailParams, Sender, Recipient } from "npm:mailersend@2.2.0";

const mailerSend = new MailerSend({
  apiKey: Deno.env.get("MAILERSEND_API_KEY") || "",
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PartnerRegistrationRequest {
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  type: "particulier" | "professionnel";
  hasExperience: "oui" | "non";
  geographicArea: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: PartnerRegistrationRequest = await req.json();
    console.log("Received registration data:", data);

    const sentFrom = new Sender("contact@levigile.fr", "Levigile");

    // Email to the applicant
    const applicantEmailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo([new Recipient(data.email)])
      .setSubject("Confirmation de votre demande d'inscription - Levigile")
      .setHtml(`
        <h1>Merci pour votre inscription, ${data.fullName} !</h1>
        <p>Nous avons bien reçu votre demande pour devenir rapporteur d'affaires chez Levigile.</p>
        <p>Récapitulatif de vos informations :</p>
        <ul>
          <li>Nom complet : ${data.fullName}</li>
          <li>Email : ${data.email}</li>
          <li>Téléphone : ${data.phone}</li>
          <li>Type : ${data.type}</li>
          <li>Zone géographique : ${data.geographicArea}</li>
        </ul>
        <p>Notre équipe va étudier votre candidature et vous recontactera très prochainement.</p>
        <p>Cordialement,<br>L'équipe Levigile</p>
      `);

    // Email to Levigile
    const adminEmailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo([new Recipient("contact@levigile.fr")])
      .setSubject("Nouvelle inscription rapporteur d'affaires")
      .setHtml(`
        <h1>Nouvelle demande de rapporteur d'affaires</h1>
        <p>Détails de la candidature :</p>
        <ul>
          <li>Nom complet : ${data.fullName}</li>
          <li>Email : ${data.email}</li>
          <li>Téléphone : ${data.phone}</li>
          <li>Adresse : ${data.address || 'Non renseignée'}</li>
          <li>Type : ${data.type}</li>
          <li>Expérience : ${data.hasExperience}</li>
          <li>Zone géographique : ${data.geographicArea}</li>
        </ul>
      `);

    // Attendre que les deux emails soient envoyés
    const [applicantEmailResponse, adminEmailResponse] = await Promise.all([
      mailerSend.email.send(applicantEmailParams),
      mailerSend.email.send(adminEmailParams)
    ]);

    console.log("Emails sent successfully:", { 
      applicantEmail: applicantEmailResponse, 
      adminEmail: adminEmailResponse 
    });

    return new Response(
      JSON.stringify({ 
        message: "Emails sent successfully",
        applicantEmail: applicantEmailResponse,
        adminEmail: adminEmailResponse
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
