// ============================================================================
//  Tilisarao Market - Configuración de Supabase
//
//  COMPLETAR LOS 2 VALORES DE ABAJO (van entre comillas, con el https://)
//
//  Dónde sacarlos:
//    Supabase Dashboard > Project Settings > API
//      - Project URL       -> SUPABASE_URL
//      - anon public key   -> SUPABASE_ANON_KEY
//
//  La "anon public key" está pensado para ir en el navegador: no es un secreto.
//  Lo que protege los datos son las políticas RLS del archivo supabase-setup.sql.
// ============================================================================

const SUPABASE_URL = 'https://zzzkeshmhoubzeysaarm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_HVEaKb7bPBMKiCHZZ0RdFg_6-wyslaz';

// El bucket de Storage donde se suben las fotos de los productos.
// Debe coincidir con el nombre del bucket en supabase-setup.sql.
const SUPABASE_BUCKET = 'fotos-productos';

// Categorías. Deben coincidir con el <select> de index.html y con el CHECK de
// la tabla productos en supabase-setup.sql.
const CATEGORIAS = [
  { value: 'vehiculos', label: 'Vehículos' },
  { value: 'inmuebles', label: 'Inmuebles' },
  { value: 'telefonos', label: 'Teléfonos' },
  { value: 'electronica', label: 'Electrónica' },
  { value: 'moda', label: 'Ropa y moda' },
  { value: 'hogar', label: 'Hogar y jardín' },
  { value: 'servicios', label: 'Servicios' },
  { value: 'otros', label: 'Otros' }
];
