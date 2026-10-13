// Content is separate from presentation; add images/sections here.
export const projects = [
  {
    slug: 'proyecto1', accent: '#ff7278', title: 'Proyecto 1', name: 'Proyecto de película',
    path: 'pages/proyecto1.html', star: 'rojo.png',
    logo: 'logopeli.png', cover: 'peli1.png',
    sections: [
      { id: 'Storytelling', label: 'Storytelling', type: 'image', image: 'introduccionpeli.png', background: 'peli2.png', variant: 'intro' },
      { id: 'personajes', label: 'Personajes', type: 'carousel', background: 'fondo vistas.jpg', padded: true,
        images: ['svalav.png', 'lincev.png', 'jorvik.png', 'Fenvar.png', 'quiebrahuesos.png'] },
      { id: 'escenarios', label: 'Escenarios', type: 'carousel', fit: 'cover', images: ['nieve.png', 'fuego.png'] },
    ],
  },
  {
    slug: 'juegos', accent: '#41cfff', title: 'Proyecto 2', name: 'Juegos Olímpicos',
    path: 'pages/juegos.html', star: 'azul.png',
    logo: 'logo olimpicos.png', cover: 'paisaje1.png',
    sections: [
      { id: 'logo', label: 'Introducción', type: 'carousel', fit: 'cover', images: ['intro2.jpg', 'intro3.jpg'] },
      { id: 'escenarios', label: 'Mascotas', type: 'carousel', fit: 'cover', images: ['muneco1.jpg', 'muneco2.jpg', 'muneco3.jpg', 'muneco4.jpg'] },
      { id: 'props', label: 'Promocionales', type: 'carousel', fit: 'cover', images: ['promo2-13.jpg', 'promo2-14.jpg', 'promo2-15.jpg', 'promo2-16.jpg', 'promo2-17.jpg'] },
    ],
  },
  {
    slug: 'proyecto3', accent: '#c792ff', title: 'Proyecto 3', name: 'Proyecto de bruja',
    path: 'pages/proyecto3.html', star: 'morado.png',
    logo: 'logobruja.png', cover: 'portadabruja.png',
    sections: [
      { id: 'logo', label: 'Personajes', type: 'carousel', fit: 'cover', images: ['rosalinda2.png', 'kitycat.png', 'lucerio.png', 'failen.png', 'fabi.png'] },
      { id: 'escenarios', label: 'Escenarios', type: 'carousel', fit: 'cover', images: ['luz.png', 'noche.png'] },
      { id: 'personajes', label: 'Cartas', type: 'carousel', background: 'fondo4.png', padded: true, images: ['carta1.png', 'carta2.png'] },
      { id: 'Elementos', label: 'Elementos', type: 'image', image: 'elementos.png', background: 'fondomorado.jpg' },
    ],
  },
  {
    slug: 'proyecto4', accent: '#ffd06e', title: 'Proyecto 4', name: 'No colapses',
    path: 'pages/proyecto4.html', star: 'amarillo.png',
    logo: 'logo final.png', cover: 'portadanocolapses.png',
    sections: [
      { id: 'Introduccion', label: 'Introducción', type: 'image', image: 'nci.png', background: 'morsado 2.png', variant: 'wide-intro' },
      { id: 'personajes', label: 'Personajes', type: 'carousel', background: 'fondonocolapses.png', padded: true, images: ['nono.png', 'no colapses2.png'] },
      { id: 'escenarios', label: 'Escenarios', type: 'carousel', fit: 'cover', tall: true, images: ['Ciudad1.jpg', 'ciudad2.jpg'] },
      { id: 'Elementos', label: 'Tablero', type: 'image', image: 'tablero.jpg' },
    ],
  },
];
