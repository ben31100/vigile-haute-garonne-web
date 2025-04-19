
import * as z from 'zod';

export const clientFormSchema = z.object({
  nom_entreprise: z.string().min(1, 'Le nom de l\'entreprise est requis'),
  contact: z.string().min(1, 'Le nom du contact est requis'),
  telephone: z.string().min(10, 'Le numéro de téléphone est requis').max(15, 'Numéro de téléphone invalide'),
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export type ClientFormData = z.infer<typeof clientFormSchema>;
