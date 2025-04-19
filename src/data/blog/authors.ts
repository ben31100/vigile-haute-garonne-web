
import { BlogAuthor } from '@/types/blog';

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
