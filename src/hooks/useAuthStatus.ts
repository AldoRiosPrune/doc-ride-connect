
import { useState } from "react";

/**
 * Simulación de estado de autenticación.
 * REEMPLAZA esto por integración real con Supabase/Clerk cuando corresponda.
 */
export const useAuthStatus = () => {
  // Cambia esto a `true` para simular usuario logueado, o intégralo con la lógica real.
  const [isAuthenticated] = useState(true); 
  return { isAuthenticated };
};
