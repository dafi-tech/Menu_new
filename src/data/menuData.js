/** @typedef {'spicy' | 'veg' | 'vegan'} BadgeKind */

/** @type {Array<{ id: string; title: string; count?: string; items?: Array<{ title: string; price: string; description: string; badges?: BadgeKind[] }>; subsections?: Array<{ title: string; items: Array<{ title: string; price: string; description: string; badges?: BadgeKind[] }> }> }>} */
export const menuSections = [
  {
    id: 'antipasti',
    title: 'Antipasti',
    count: '3 piatti',
    items: [
      {
        title: 'Meat Sambusa',
        price: '€3,00',
        description: 'Fagottini fritti ripieni di carne macinata di manzo e spezie.',
      },
      {
        title: 'Catagna',
        price: '€2,00',
        description:
          'Injera tostata al momento, leggermente croccante fuori e morbida all’interno, con burro chiarificato e una profumata miscela di spezie berberè.',
        badges: ['spicy'],
      },
      {
        title: 'Vegetarian Sambusa',
        price: '€3,00',
        description: 'Fagottini fritti ripieni di lenticchie e verdure.',
        badges: ['veg', 'vegan'],
      },
    ],
  },
  {
    id: 'principali',
    title: 'Piatti principali',
    count: '8 piatti',
    items: [
      {
        title: 'Zighni di carne',
        price: '€17,00',
        description:
          'Stufato tradizionale con berberè e spezie, dal sapore intenso e leggermente piccante, servito su injera. Disponibile con manzo, pollo o agnello, oppure con un mix di due carni a scelta.',
        badges: ['spicy'],
      },
      {
        title: 'Zighni vegetariano',
        price: '€15,00',
        description:
          'Selezione di piatti vegetariani tradizionali etiopi ed eritrei: lenticchie rosse e gialle, shiro (crema di ceci), hamli (coste), alicia (cavolo, fagioli e patate), cime di rapa e insalata.',
        badges: ['veg', 'vegan'],
      },
      {
        title: 'Zilzil',
        price: '€20,00',
        description: 'Striscioline di manzo saltate con cipolla, peperoni e spezie, dal gusto deciso.',
      },
      {
        title: 'Kitfo',
        price: '€18,00',
        description:
          'Manzo tritato finemente con burro chiarificato e mitmita, servito crudo, semicrudo o cotto.',
        badges: ['spicy'],
      },
      {
        title: 'Tibs / Spriss bianco',
        price: '€17,00',
        description:
          'Bocconcini di manzo con cipolla e spezie. Bianco: non piccante. Rosso: con berberè.',
      },
      {
        title: 'Gored Gored',
        price: '€18,00',
        description:
          'Bocconcini di manzo con burro chiarificato e spezie, serviti crudi o semicrudi.',
        badges: ['spicy'],
      },
      {
        title: 'Tibs keyih / Spriss rosso',
        price: '€17,00',
        description:
          'Bocconcini di manzo con cipolla e spezie. Rosso: con berberè. Bianco: senza piccante.',
        badges: ['spicy'],
      },
      {
        title: 'Misto per 3',
        price: '€56,00',
        description:
          'Piatto misto Habesha — selezione di piatti tradizionali etiopi ed eritrei serviti su injera, ideale da condividere.',
        badges: ['spicy'],
      },
    ],
  },
  {
    id: 'dolci',
    title: 'Dolci',
    count: '4 piatti',
    items: [
      { title: 'Dolci di cocco', price: '€5,00', description: 'Dolce al cocco.' },
      {
        title: 'Sorbetto',
        price: '€5,00',
        description: 'Limone, mango o mela verde.',
        badges: ['veg', 'vegan'],
      },
      { title: 'Dolci di semolino', price: '€5,00', description: 'Semolino.' },
      {
        title: 'Sesamo con pistacchio',
        price: '€5,00',
        description: 'Sesamo con pistacchio.',
        badges: ['veg', 'vegan'],
      },
    ],
  },
  {
    id: 'bevande',
    title: 'Bevande',
    subsections: [
      {
        title: 'Bevande analcoliche e calde',
        items: [
          {
            title: 'Bevande analcoliche',
            price: '€3,00',
            description: 'Coca-Cola, Fanta, Sprite, Red Bull e altre.',
          },
          { title: 'Acqua', price: '€3,00', description: 'Naturale o frizzante.' },
          { title: 'Cappuccino', price: '€2,00', description: 'Cappuccino.' },
          { title: 'Caffè', price: '€1,50', description: 'Caffè.' },
          {
            title: 'Tè',
            price: '€1,50',
            description:
              'Tè Habesha — tè caldo speziato, preparato secondo la tradizione etiope ed eritrea.',
          },
        ],
      },
      {
        title: 'Vini',
        items: [
          {
            title: 'Bottiglia 75 cl',
            price: '€20,00',
            description:
              'Chianti, Teroldego, Merlot, Primitivo, Dolcetto d’Alba, Pinot grigio, Chardonnay, Nero d’Avola.',
          },
          {
            title: 'Vino rosso/bianco 0,5 L',
            price: '€10,00',
            description: 'Mezzo litro di vino rosso o bianco.',
          },
          {
            title: 'Mezza bottiglia 37,5 cl',
            price: '€10,00',
            description: 'Chianti, Teroldego, Nero d’Avola.',
          },
          {
            title: 'Bicchiere di vino',
            price: '€4,00',
            description: 'Vino della casa al bicchiere.',
          },
          {
            title: 'Bicchiere di prosecco',
            price: '€4,00',
            description: 'Prosecco al bicchiere.',
          },
          {
            title: 'Vino sudafricano',
            price: '€22,00',
            description: 'Shiraz, Chardonnay, Pinotage.',
          },
        ],
      },
      {
        title: 'Birre',
        items: [
          {
            title: 'Birra alla spina piccola',
            price: '€4,00',
            description: 'Ichnusa alla spina piccola — lager italiana, fresca e leggera.',
          },
          {
            title: 'Birra 33 cl',
            price: '€3,00',
            description:
              'Birra Moretti — 33 cl, lager italiana. Beck’s — 33 cl, lager tedesca. Heineken — 33 cl, lager olandese.',
          },
          {
            title: 'Birra alla spina media',
            price: '€5,00',
            description: 'Ichnusa alla spina media — lager italiana, fresca e leggera.',
          },
          {
            title: 'Birra Asmara',
            price: '€4,00',
            description: 'Birra Asmera — 33 cl, lager eritrea, leggera e rinfrescante.',
          },
          {
            title: 'Birra Habesha',
            price: '€4,00',
            description: 'Birra Habesha — 33 cl, lager etiope, leggera e ben bilanciata.',
          },
          {
            title: 'Birra St. George',
            price: '€4,00',
            description:
              'Birra St. George — 33 cl, lager etiope, dal gusto pieno e leggermente maltato.',
          },
        ],
      },
    ],
  },
]
