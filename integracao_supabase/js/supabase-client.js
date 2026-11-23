// SUPABASE: chave publicável, apropriada para código que roda no navegador.
// Nunca coloque sb_secret_ ou service_role neste arquivo.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.119.0';

export const supabase = createClient(
  'https://ztowltuuzwggsobruhst.supabase.co',
  'sb_publishable_VUEC51HP9iETcor5UV_ErA_d9wos7tr',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      storageKey: 'guardioes-cerrado-supabase-auth'
    }
  }
);

export const pagina = (nome) => new URL(nome, window.location.href).href;
