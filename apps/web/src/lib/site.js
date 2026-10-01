export const ETSY_SHOP = 'https://www.etsy.com/shop/LesAventuresDeMaTeSoupe';
export const ETSY_TOME1 = 'https://www.etsy.com/shop/LesAventuresDeMaTeSoupe?section_id=tome-1';
export const ETSY_TOME2 = 'https://www.etsy.com/shop/LesAventuresDeMaTeSoupe?section_id=tome-2';

export const IMG = {
    heroGirl: 'https://images.hostinger.com/180f1881-24cd-406f-8f5e-59d092bd9cdc.png',
    heroine: 'https://images.hostinger.com/c26ce9db-a512-41f2-9dac-5570ffb2080c.png',
    cocoBaignoire: 'https://images.hostinger.com/5c400529-2d7f-4083-99c4-fb3330f17a5d.png',
    atelier: 'https://images.hostinger.com/c58de7dd-bd9f-4b9a-bd8e-96785199c84f.png',
    bain: 'https://images.hostinger.com/94ecaecc-e094-45b4-ad03-e63bbf0d1343.png',
    tome1: 'https://images.hostinger.com/a644c639-3f07-4436-91db-4d9a9f898258.png',
    tome2: 'https://images.hostinger.com/f0b0bc2f-1e80-4c97-9b57-ecdac682fad3.png',
    perso1: 'https://images.hostinger.com/62866d23-3fae-48eb-839f-241edbc62b5b.png',
    perso2: 'https://images.hostinger.com/98592eb4-14f7-4dd9-aed0-67539c71e622.png',
    tomate: 'https://images.hostinger.com/a759208d-920a-4128-bda3-1d6c7d45b98f.png',
    carottes: 'https://images.hostinger.com/98e0aa3e-8089-4378-b2f8-09f47bfef2e7.png',
    courge: 'https://images.hostinger.com/ff4b1139-95ae-4490-b108-8408eec6012c.png',
    poireau: 'https://images.hostinger.com/7d902dc1-be7c-4490-934b-b8205c351191.png',
    soupe: 'https://images.hostinger.com/d194cc8c-b8ac-4071-8149-65961705ef84.png',
    carte: 'https://images.hostinger.com/637ba2c7-86af-4a0f-baaa-90190d0cda1b.png',
    cartesPostales: 'https://images.hostinger.com/de68a709-f0d2-4db7-8dd2-f56e61058393.png',
    cocotest: 'https://imgur.com/a/JLQLi0f'
};

export const NAV = [
    { to: '/', label: 'Accueil' },
    { to: '/tome-1', label: 'Tome 1' },
    { to: '/tome-2', label: 'Tome 2' },
    { to: '/univers', label: 'Univers' },
    { to: '/boite-a-images', label: 'Boîte à images' },
    { to: '/boite-aux-lettres', label: 'Boîte aux lettres' },
    { to: '/contact', label: 'Contact' },
];

export const LIEUX = [
    {
        nom: 'La Baie de la Soupe Fumante',
        food: 'Soupe de potimarron',
        texte: 'Une baie tiède où les vagues sentent le potimarron rôti. On y navigue en coco baignoire, cuillère en guise de rame.',
        img: IMG.courge,
    },
    {
        nom: 'Le Verger de Tomatille',
        food: 'Tomates cerises',
        texte: 'Des arbres chargés de tomates cerises qui chantent faux. Imaya y apprend que le rouge a plusieurs goûts.',
        img: IMG.tomate,
    },
    {
        nom: 'Les Collines Croquantes',
        food: 'Carottes et radis',
        texte: 'Un sentier de carottes orange où chaque pas fait « crounch ». Le pays préféré des lapins-guides.',
        img: IMG.carottes,
    },
    {
        nom: 'Le Marché des Lanternes',
        food: 'Poireaux et pommes de terre',
        texte: 'Le soir, les étals flottent au-dessus de la rivière. On y échange un poireau contre une histoire.',
        img: IMG.poireau,
    },
];

export const PERSOS = [
    { nom: 'Imaya', role: 'La petite exploratrice du goût', img: IMG.perso1 },
    { nom: 'Matesoupe', role: 'La marchande de saveurs au chapeau-carotte', img: IMG.heroine },
    { nom: 'Barnabé', role: 'Le mousse cueilleur de baies', img: IMG.perso2 },
    { nom: 'Coco Baignoire', role: 'Le bateau-baignoire, moitié coquille moitié bain', img: IMG.cocoBaignoire },
];
