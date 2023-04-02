const products = [
  {
    id: 'h734h83hrg983h98',
    name: 'Notebook Gamer',
    date: null,
    description: 'esse microondas é muito bom porque xis, ipslum e ze',
    price: 1499,
    category: ['eletronicos', 'casa', 'cozinha'],
    images: [
      {
        id: 'i3h4h983hg93n849',
        url: 'https://picsum.photos/200/200',
      },
      {
        id: 'rj8h38g38g988038',
        url: 'https://picsum.photos/200/200',
      },
    ],
    slug: 'microondas-eletrolux',
  },
  {
    id: 'm8h84ht8ng8h85gn',
    name: 'Notebook alienware',
    date: null,
    description: 'esse iphone é muito bom porque xis, ipslum e ze',
    price: 2457,
    category: ['eletronicos', 'celulares'],
    images: [
      {
        id: '43bg3b95gb93b49g',
        url: 'https://picsum.photos/200/200',
      },
      {
        id: 'mf038489gn395g99',
        url: 'https://picsum.photos/200/200',
      },
    ],
    slug: 'iphone-13-max',
  },
];

export type IProduct = typeof products[number];

export async function GET(request: Request) {
  const sessionProducts = products.map(product => ({
    ...product,
    date: new Date().toISOString(),
  }));

  return new Response(JSON.stringify(sessionProducts), {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}
