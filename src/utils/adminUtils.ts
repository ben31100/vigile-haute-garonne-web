
import { supabase } from '@/integrations/supabase/client';

export async function createAdmin(email: string, password: string, firstName?: string, lastName?: string) {
  try {
    // Step 1: Create the user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      console.error('Error creating auth user:', authError);
      throw authError;
    }

    if (!authData.user) {
      throw new Error('No user data returned');
    }

    // Step 2: Create the administrator record
    const { error: adminError } = await supabase
      .from('administrators')
      .insert([
        {
          id: authData.user.id,
          email: email,
          prénom: firstName,
          nom: lastName,
          password_hash: 'not-used-for-auth' // We don't store actual passwords since Supabase Auth handles this
        }
      ]);

    if (adminError) {
      console.error('Error creating admin record:', adminError);
      throw adminError;
    }

    return { success: true, userId: authData.user.id };
  } catch (error) {
    console.error('Error in createAdmin:', error);
    throw error;
  }
}
