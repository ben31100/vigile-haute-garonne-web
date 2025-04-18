
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    // Email to the applicant
    const applicantEmailPromise = resend.emails.send({
      from: "LeVigile <contact@levigile.fr>",
      to: [data.email],
      subject: "Confirmation de votre demande d'inscription - LeVigile",
      html: `
        <h1>Merci pour votre inscription, ${data.fullName} !</h1>
        <p>Nous avons bien reçu votre demande pour devenir rapporteur d'affaires chez LeVigile.</p>
        <p>Récapitulatif de vos informations :</p>
        <ul>
          <li>Nom complet : ${data.fullName}</li>
          <li>Email : ${data.email}</li>
          <li>Téléphone : ${data.phone}</li>
          <li>Type : ${data.type}</li>
          <li>Zone géographique : ${data.geographicArea}</li>
        </ul>
        <p>Notre équipe va étudier votre candidature et vous recontactera très prochainement.</p>
        <p>Cordialement,<br>L'équipe LeVigile</p>
      `,
    });

    // Email to LeVigile
    const adminEmailPromise = resend.emails.send({
      from: "LeVigile <contact@levigile.fr>",
      to: ["contact@levigile.fr"],
      subject: "Nouvelle inscription rapporteur d'affaires",
      html: `
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
      `,
    });

    // Attendre que les deux emails soient envoyés
    const [applicantEmailResponse, adminEmailResponse] = await Promise.all([
      applicantEmailPromise,
      adminEmailPromise
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

