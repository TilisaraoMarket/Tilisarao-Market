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

// A que mercado pertenece ESTA web. Define que publicaciones se ven y
// a que pueblo se guarda lo que se publica desde aca.
// Es la unica linea que hay que cambiar para agregar un mercado nuevo:
// en la copia de cada pueblo va el nombre de ese pueblo, en minusculas
// y sin tildes (ej: 'concaran', 'san-luis', 'mercedes').
const TIENDA = 'tilisarao';

// Nombre que ve el comprador: título de las tarjetas y texto del mensaje
// de WhatsApp. Acá va el nombre del mercado, con mayúsculas y tildes.
const NOMBRE_TIENDA = 'Tilisarao Market';

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
