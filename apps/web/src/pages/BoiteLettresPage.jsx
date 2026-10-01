import React from 'react';
import { Helmet } from 'react-helmet';
import Reveal from '@/components/Reveal';
import SiteLayout from '@/components/SiteLayout';
import KidMailForm from '@/components/KidMailForm';
import { IMG } from '@/lib/site';

const courriers = [
    { img: IMG.perso1, legende: 'Awa nous écrit qu’elle a mangé sa première soupe de courge.' },
    { img: IMG.bain, legende: 'Tom a fabriqué une coco baignoire dans sa baignoire, pour de vrai.' },
    { img: IMG.cartesPostales, legende: 'Trois cartes postales arrivées de Bordeaux le même matin.' },
    { img: IMG.tomate, legende: 'Lila a dessiné la tomate qui rougit quand on la regarde.' },
    { img: IMG.atelier, legende: 'La classe de Mme Roche nous a envoyé une fresque entière.' },
    { img: IMG.carottes, legende: 'Noé a compté 12 carottes dans le tome 1. Il en manquait une.' },
];

const BoiteLettresPage = () => (
    <SiteLayout>
        <Helmet>
            <title>Boîte aux lettres : le courrier des enfants | Matesoupe</title>
            <meta name="description" content="Le courrier reçu des enfants et le formulaire ludique pour envoyer une lettre ou un dessin à Matesoupe." />
        </Helmet>

        <section className="mx-auto max-w-[90rem] px-5 py-16">
            <h1 className="font-display text-4xl sm:text-5xl">Boîte aux lettres</h1>
            <h2 className="mt-8 font-display text-2xl sm:text-3xl">Courrier reçu</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courriers.map((c, i) => (
                    <Reveal key={c.legende} delay={i * 0.05}>
                        <figure className="group relative overflow-hidden rounded-[2rem] border-2 border-border bg-white">
                            <img src={c.img} alt={c.legende} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-[hsl(20_40%_15%/0.85)] p-4 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                {c.legende}
                            </figcaption>
                        </figure>
                    </Reveal>
                ))}
            </div>
        </section>

        <section className="border-t-2 border-border bg-[hsl(var(--muted))] py-20">
            <div className="mx-auto max-w-[56rem] px-5">
                <h2 className="font-display text-3xl sm:text-4xl">Vous souhaitez m’envoyer un courrier ou un dessin ?</h2>
                <p className="mt-3 text-lg text-muted-foreground">
                    Raconte-nous ton passage à ton légume préféré, ou décris ton dessin. Un adulte peut t’aider à écrire.
                </p>
                <div className="mt-8">
                    <KidMailForm type="enfant" />
                </div>
            </div>
        </section>
    </SiteLayout>
);

export default BoiteLettresPage;
