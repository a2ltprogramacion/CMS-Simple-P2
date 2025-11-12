// @src/content/config.ts (VERSIÓN 6.4 - Colección Legal y Footer)
import { z, defineCollection } from 'astro:content';

// 1. Colección Productos
const productosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

// 2. Colección Páginas (Home)
const paginasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    template: z.string().optional(),
    hero: z.object({
      show_section: z.boolean().optional().default(true), 
      title: z.string().optional(),
      subtitle: z.string().optional(),
      description: z.string().optional(), 
      cta_text: z.string().optional(),
      cta_url: z.string().optional(),
      image_logo: z.string().optional(), 
      image_main: z.string().optional(), 
    }).optional(),
    cualidades_marca: z.object({
      show_section: z.boolean().optional().default(true),
      items: z.array(z.object({
        icon: z.string().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
        image_fondo: z.string().optional(),
      })).optional(),
    }).optional(),
    nosotros: z.object({
      show_section: z.boolean().optional().default(true), 
      image: z.string().optional(),
      title: z.string().optional(),
      subtitle: z.string().optional(),
      description: z.string().optional(),
      mision_title: z.string().optional(),
      mision_text: z.string().optional(),
      vision_title: z.string().optional(),
      vision_text: z.string().optional(),
    }).optional(),
    productos: z.object({
      show_section: z.boolean().optional().default(true), 
      title: z.string().optional(),
      subtitle: z.string().optional(),
    }).optional(),
    proyectos: z.object({ 
      show_section: z.boolean().optional().default(true),
      title: z.string().optional(),
      subtitle: z.string().optional(),
      lista_destacados: z.array(z.string()).optional(),
    }).optional(),
    clientes: z.object({
      show_section: z.boolean().optional().default(true), 
      title: z.string().optional(),
      lista_destacados: z.array(z.string()).optional(),
      show_scroller: z.boolean().optional().default(true),
    }).optional(),
    testimonios: z.object({ 
      show_section: z.boolean().optional().default(true),
      title: z.string().optional(),
      lista: z.array(z.object({
        quote: z.string(),
        author: z.string().optional(),
        google_review_embed: z.string().optional(),
      })).optional(),
    }).optional(),
  }),
});

// 3. Colección Proyectos
const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    client_name: z.string(),
    titulo: z.string(), 
    services_list: z.array(z.string()).optional(),
    image: z.string().optional(), 
    date: z.date().optional(),
    summary: z.string().optional(), 
    project_details: z.string().optional(),    
    gallery: z.array(z.object({ image_path: z.string() })).optional(),
  }),
});

// 4. Colección Clientes
const clientesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    logo: z.string(),
    url: z.string().url().optional(),
  }),
});

// 5. Colección Ajustes
const ajustesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    brand_name: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    canonical_url: z.string().optional(),
    robots: z.string().optional(),
    og: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
  }),
});

// 6. Colección Contacto
const contactoCollection = defineCollection({
  type: 'data',
  schema: z.object({
    whatsapp: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    contact_heading: z.string().optional(),
    contact_subheading: z.string().optional(),
    whatsapp_message: z.string().optional(),
    show_contact_section: z.boolean().optional(),
    logo_footer: z.string().optional(),
    footer_description: z.string().optional(),
    social_media: z.object({
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
      twitter: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      youtube: z.string().url().optional(),
    }).optional(),
  }),
});

// 7. Colección Navegación del Footer (CORREGIDA V6.4)
const footerNavigationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // Un array de columnas de enlaces
    columns: z.array(z.object({
      title: z.string(), // Título de la columna (p.ej. "Navegación")
      links: z.array(z.object({
        text: z.string(),
        url: z.string(),
      })),
    })).optional(),
  }),
});

// 8. Colección Páginas Legales
const legalCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
  }),
});


// --- Exportaciones ---
export const collections = {
  'productos': productosCollection,
  'pages': paginasCollection,
  'proyectos': proyectosCollection,
  'clientes': clientesCollection,
  'ajustes': ajustesCollection,
  'informacion-de-contacto': contactoCollection,
  'footer_navigation': footerNavigationCollection, // CORREGIDO
  'legal': legalCollection,
};