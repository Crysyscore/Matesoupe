import React from 'react';
import { Helmet } from 'react-helmet';
import { Download } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SiteLayout from '@/components/SiteLayout';
import { IMG } from '@/lib/site';

const dessins = [
    { img: IMG.cocoBaignoire, legende: 'Ma coco baignoire — Lila, 5 ans' },
    { img: IMG.tomate, legende: 'La tomate qui rit — Noé, 4 ans' },
    { img: IMG.carte, legende: 'Ma carte d’Imaya — Sacha, 7 ans' },
    { img: IMG.perso1, legende: 'Imaya sous la pluie — Awa, 6 ans' },
    { img: IMG.carottes, legende: 'Les carottes jumelles — Ines, 5 ans' },
    { img: IMG.tome2, legende: 'Le marché la nuit — Tom, 8 ans' },
];

const coloriages = ['La coco baignoire', 'Le potimarron grand-père', 'Les collines croquantes', 'Imaya et son parapluie', 'Le marché des lanternes', 'La carte à colorier'];
const fiches = [
    'Reconnaître 8 légumes d’hiver',
    'Le vocabulaire du goût (5 mots)',
    'Atelier textures : lisse, râpeux, croquant',
    'Cuisiner la soupe étape par étape',
    'Les couleurs de l’assiette',
    'Écrire une carte postale d’Imaya',
];

const Card = ({ titre, i, kind }) => (
    <Reveal delay={i * 0.05}>
        <div className="flex items-center gap-4 rounded-[1.5rem] border-2 border-border bg-white p-5">
            <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-[hsl(var(--accent))] font-display text-lg">{i + 1}</span>
            <p className="flex-1 font-semibold">{titre}</p>
            <a
                href={IMG.carte}
                download
                target="_blank"
                rel="noreferrer"
                aria-label={`Télécharger : ${titre}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[hsl(var(--secondary))] px-4 text-sm font-bold text-[hsl(var(--secondary-foreground))]"
            >
                <Download className="h-4 w-4" /> {kind}
            </a>
        </div>
    </Reveal>
);

const BoiteImagesPage = () => (
    <SiteLayout>
        <Helmet>
            <title>Boîte à images : vos dessins, coloriages et fiches pédagogiques | Matesoupe</title>
            <meta name="description" content="Les dessins envoyés par les enfants, 6 coloriages à imprimer et 6 fiches pédagogiques gratuites pour les parents et les enseignants." />
        </Helmet>

        <section className="mx-auto max-w-[90rem] px-5 py-16">
            <h1 className="font-display text-4xl sm:text-5xl">Boîte à images</h1>
            <h2 className="mt-8 font-display text-2xl sm:text-3xl">Vos dessins</h2>
            <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
                {dessins.map((d, i) => (
                    <figure key={d.legende} className="wiggle-hover break-inside-avoid overflow-hidden rounded-[2rem] border-2 border-border bg-white" style={{ transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}>
                        <img src={d.img} alt={d.legende} className="w-full object-cover" />
                        <figcaption className="p-4 font-semibold">{d.legende}</figcaption>
                    </figure>
                ))}
            </div>
        </section>

        <section className="border-y-2 border-border bg-[hsl(var(--muted))] py-20">
            <div className="mx-auto max-w-[72rem] px-5">
                <h2 className="font-display text-3xl">Nos coloriages</h2>
                <p className="mt-2 text-muted-foreground">Six planches à imprimer, format A4, prêtes pour les feutres.</p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {coloriages.map((c, i) => <Card key={c} titre={c} i={i} kind="Coloriage" />)}
                </div>
            </div>
        </section>

        <section className="mx-auto max-w-[72rem] px-5 py-20">
            <h2 className="font-display text-3xl">Fiches pédagogiques</h2>
            <p className="mt-2 text-muted-foreground">Six fiches pour prolonger la lecture à la maison ou en classe.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
                {fiches.map((f, i) => <Card key={f} titre={f} i={i} kind="Fiche" />)}
            </div>
        </section>
    </SiteLayout>
);

export default BoiteImagesPage;
