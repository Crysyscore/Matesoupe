import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ZoomIn } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SiteLayout from '@/components/SiteLayout';
import { PostcardGallery } from '@/components/TomeSections';
import { IMG, LIEUX, PERSOS } from '@/lib/site';

const UniversPage = () => {
    const [zoom, setZoom] = useState(false);

    return (
        <SiteLayout>
            <Helmet>
                <title>L’univers d’Imaya : carte, lieux et personnages | Matesoupe</title>
                <meta name="description" content="Explorez la carte d'Imaya : la Baie de la Soupe Fumante, le Verger de Tomatille, les Collines Croquantes et le Marché des Lanternes, ainsi que tous les personnages." />
            </Helmet>

            <section className="mx-auto max-w-[90rem] px-5 py-16">
                <h1 className="font-display text-4xl sm:text-5xl">La Carte d’Imaya</h1>
                <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
                    Chaque île a son aliment, son odeur et sa leçon. Cliquez sur la carte pour l’agrandir.
                </p>
                <button
                    type="button"
                    onClick={() => setZoom((v) => !v)}
                    className="group mt-8 block w-full overflow-hidden rounded-[2.5rem] border-2 border-border bg-white"
                >
                    <img
                        src={IMG.carte}
                        alt="Carte illustrée du monde d'Imaya avec la mer de soupe et les îles légumes"
                        className={`w-full object-cover transition-transform duration-500 ${zoom ? 'scale-[1.35]' : 'scale-100'}`}
                    />
                    <span className="flex items-center justify-center gap-2 border-t-2 border-border py-3 font-bold text-[hsl(var(--primary))]">
                        <ZoomIn className="h-4 w-4" /> {zoom ? 'Réduire la carte' : 'Agrandir la carte'}
                    </span>
                </button>
            </section>

            <section className="border-y-2 border-border bg-[hsl(var(--muted))] py-20">
                <div className="mx-auto max-w-[90rem] px-5">
                    <h2 className="font-display text-3xl sm:text-4xl">Les lieux de l’histoire</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {LIEUX.map((l, i) => (
                            <Reveal key={l.nom} delay={i * 0.06}>
                                <article className="flex gap-5 rounded-[2rem] border-2 border-border bg-white p-5">
                                    <img src={l.img} alt={`${l.nom} — ${l.food}`} className="h-28 w-28 flex-none rounded-[1.25rem] object-cover" />
                                    <div>
                                        <h3 className="font-display text-xl">{l.nom}</h3>
                                        <p className="text-sm font-bold text-[hsl(var(--primary))]">{l.food}</p>
                                        <p className="mt-2 text-muted-foreground">{l.texte}</p>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-[90rem] px-5 py-20">
                <h2 className="font-display text-3xl sm:text-4xl">Les personnages</h2>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {PERSOS.map((p, i) => (
                        <Reveal key={p.nom} delay={i * 0.06}>
                            <article className="wiggle-hover overflow-hidden rounded-[2rem] border-2 border-border bg-white">
                                <img src={p.img} alt={p.nom} className="aspect-[3/4] w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="font-display text-xl">{p.nom}</h3>
                                    <p className="text-muted-foreground">{p.role}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </section>

            <PostcardGallery
                titre="Quatre cartes postales d’Imaya"
                cartes={[
                    { img: IMG.cartesPostales, titre: 'Baie de la Soupe Fumante', mot: '« Il fait chaud, ça sent le potimarron. »' },
                    { img: IMG.tome1, titre: 'Village des Légumes Debout', mot: '« J’ai dormi dans une courge. »' },
                    { img: IMG.tome2, titre: 'Marché des Lanternes', mot: '« Les fruits ont changé de nom. »' },
                    { img: IMG.carte, titre: 'Collines Croquantes', mot: '« Chaque pas fait crounch. »' },
                ]}
            />
        </SiteLayout>
    );
};

export default UniversPage;
