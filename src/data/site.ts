import { SITE_URL } from './domain.mjs';

// Configuração central do site. Quase tudo que muda no dia a dia fica aqui.

export const site = {
  name: 'Hogar Práctico',
  // Domínio do site: mude aqui E em src/data/domain.mjs (usado pelo sitemap e pelo robots.txt).
  url: SITE_URL,
  description:
    'Guías prácticas para el día a día en casa: limpieza, orden, cocina, ahorro y pequeños arreglos, explicados paso a paso y con fuentes fiables.',
  /** Frase curta que aparece embaixo do nome no cabeçalho. */
  tagline: 'Guías prácticas para tu casa',
  locale: 'es_ES',
  lang: 'es-ES',
};

export type Category = {
  /** Nome curto que aparece no menu e no breadcrumb. */
  name: string;
  /** <title> da página da categoria (≤ 60 caracteres). */
  title: string;
  /** meta description da página da categoria (≤ 155 caracteres). */
  metaDescription: string;
  /** Texto de abertura da página da categoria. */
  description: string;
};

// Categorias do blog. A chave é o slug da URL: /<categoria>/<artigo>/.
// O menu, a página /<categoria>/ e a prateleira da home só aparecem quando a categoria já tem artigo publicado.
// Ainda sem categorias: crie conforme a pauta for aprovada. Exemplo:
//   limpieza: {
//     name: 'Limpieza',
//     title: 'Trucos de limpieza para casa | Hogar Práctico',
//     metaDescription: '...',
//     description: '...',
//   },
export const categories: Record<string, Category> = {
  ahorro: {
    name: 'Ahorro en casa',
    title: 'Ahorro en casa: luz, agua y gas | Hogar Práctico',
    metaDescription:
      'Guías para entender tus facturas de luz, agua y gas, detectar cobros que no cuadran y gastar menos en casa sin complicarte.',
    description:
      'Facturas de luz, agua y gas explicadas sin jerga: qué mirar, por qué suben y qué puedes hacer para pagar solo lo que consumes.',
  },
  limpieza: {
    name: 'Limpieza',
    title: 'Trucos de limpieza para casa, paso a paso | Hogar Práctico',
    metaDescription:
      'Guías de limpieza para casa: moho, cal, horno, baño, lavadora y cocina, con métodos seguros y qué productos no debes mezclar nunca.',
    description:
      'Cómo limpiar cada rincón de casa con métodos que funcionan, sin gastar de más y sin poner en riesgo tu salud: qué usar, qué evitar y cuándo llamar a un profesional.',
  },
  orden: {
    name: 'Orden',
    title: 'Orden en casa: cómo organizar cada espacio | Hogar Práctico',
    metaDescription:
      'Guías para ordenar y organizar la casa: armario, cocina, nevera, despensa, baño, papeles y trastero, con métodos sencillos que se mantienen.',
    description:
      'Métodos sencillos para ordenar cada rincón de casa y que el orden dure: qué guardar, dónde ponerlo y de qué desprenderte, sin comprar media tienda de organizadores.',
  },
};

// Assinatura dos artigos. É a equipe (sem nome pessoal, por decisão do dono). Não inventar pessoas nem credenciais.
export const author = {
  name: 'Equipo editorial de Hogar Práctico',
  url: '/equipo-editorial/',
  image: '/equipo-editorial.svg',
  /** PNG para o schema.org (logo da organização). */
  imagePng: '/equipo-editorial.png',
  bio: 'Investigamos, escribimos y revisamos cada guía de Hogar Práctico. Probamos los pasos con fuentes fiables (organismos oficiales, fabricantes y asociaciones de consumidores) y, si algo no está claro, lo decimos.',
};

// Redes sociais do site. Aparecem no rodapé e na assinatura quando preenchidas (URL completa).
export const social: { instagram: string | null; facebook: string | null } = {
  instagram: null,
  facebook: null,
};

export const footerLinks: { label: string; href: string }[] = [
  { label: 'Sobre nosotros', href: '/sobre-nosotros/' },
  { label: 'Equipo editorial', href: '/equipo-editorial/' },
  { label: 'Política editorial', href: '/politica-editorial/' },
  { label: 'Aviso legal', href: '/aviso-legal/' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad/' },
  { label: 'Política de cookies', href: '/politica-de-cookies/' },
  { label: 'Contacto', href: '/contacto/' },
];

// Como cada guia é escrito (home e política editorial).
export const standards = [
  {
    name: 'Fuentes fiables',
    text: 'Nos basamos en fuentes primarias y oficiales, y las enlazamos al final de cada guía.',
  },
  {
    name: 'Lenguaje claro',
    text: 'Frases cortas, palabras de todos los días y pasos concretos que puedes aplicar hoy.',
  },
  {
    name: 'Honestidad',
    text: 'Si algo no está claro o los datos son limitados, lo decimos en vez de exagerar.',
  },
  {
    name: 'Siempre al día',
    text: 'Cada guía muestra cuándo se publicó y cuándo se actualizó, y corregimos los errores en cuanto los confirmamos.',
  },
];

export const promises = [
  'Nunca inventamos datos, estudios, testimonios ni expertos.',
  'No prometemos resultados milagrosos.',
  'Te decimos cuándo la información disponible es limitada.',
  'Separamos siempre la publicidad del contenido.',
];

// Aviso que aparece no rodapé de todas as páginas. null = sem aviso.
// Para nichos sensíveis (saúde, finanças, direito), escreva aqui o aviso adequado.
export const footerNotice: string | null =
  'Las guías de este sitio son informativas. Antes de usar productos de limpieza, herramientas o instalaciones eléctricas, de gas o de agua, sigue las instrucciones del fabricante y, si tienes dudas, consulta a un profesional.';

// Publicidade (Google AdSense). null = desligado: nenhum script de anúncio e nenhum ads.txt.
// Quando aprovar, coloque o ID de editor (ex.: 'ca-pub-0000000000000000').
// Atenção: na Espanha/UE o Google exige um banner de consentimento certificado (CMP) para exibir anúncios.
export const adsense: { client: string | null } = {
  client: null,
};

// Google Search Console: código da verificação por "Tag HTML" (só o valor de content="...").
// Não é necessário se a verificação for feita pelo DNS (domínio na Cloudflare).
export const searchConsole: { verification: string | null } = {
  verification: null,
};

// Medição de cliques nos blocos de leitura relacionada (ideia do plugin "Conteúdo Relacionado").
// Com um ID do Google Analytics 4 (ex.: 'G-XXXXXXXXXX'), cada clique vira o evento "clic_relacionado".
// null = desligado (nenhum script de analytics é carregado).
// Google Tag Manager (ex.: 'GTM-XXXXXXX'). null = desligado.
// Não configure o GA4 dentro do GTM: ele já está instalado direto (analytics.ga4Id) e contaria em dobro.
// Tags dentro do GTM (pixel do Facebook etc.) precisam respeitar o consentimento (Configurações de consentimento da tag).
export const tagManager: { id: string | null } = {
  id: null,
};

export const analytics: { ga4Id: string | null } = {
  ga4Id: null,
};

// Barra fixa com um link (ideia do plugin "Responsive Button"). Desligada por padrão.
// Versão discreta: aparece sem atraso, tem botão de fechar e fica fechada durante a visita.
export const stickyBar = {
  active: false,
  text: 'Lee nuestra guía más completa',
  href: '/',
  /** 'top' ou 'bottom'. */
  position: 'bottom' as 'top' | 'bottom',
  /** Caminhos onde a barra não aparece, ex.: ['/contacto/']. */
  exclude: [] as string[],
};

