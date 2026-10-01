import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { IMG } from '@/lib/site';

export const TomeIntro = ({ perso, kicker, titre, paragraphes, etsy, palette }) => (
    <section className="mx-auto max-w-[72rem] px-5 pb-16 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
                <div className="wiggle-hover overflow-hidden rounded-[2.5rem] border-2 border-border" style={{ background: palette }}>
                    <img src={perso} alt={`Personnage du ${titre}`} className="w-full object-cover" />
                </div>
            </Reveal>
            <Reveal delay={0.1}>
                <p className="font-display text-sm uppercase tracking-[0.2em] text-[hsl(var(--primary))]">{kicker}</p>
                <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{titre}</h1>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                    {paragraphes.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
                </div>
                <a
                    href={etsy}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-6 text-lg font-bold text-[hsl(var(--primary-foreground))] shadow-[0_7px_0_hsl(14_60%_42%)] transition-transform active:translate-y-[3px] active:shadow-[0_4px_0_hsl(14_60%_42%)]"
                >
                    Voir la fiche produit sur Etsy <ArrowUpRight className="h-5 w-5" />
                </a>
            </Reveal>
        </div>
    </section>
);

export const FoodGallery = ({ titre, items }) => (
    <section className="border-y-2 border-border bg-[hsl(var(--muted))] py-20">
        <div className="mx-auto max-w-[90rem] px-5">
            <h2 className="font-display text-3xl sm:text-4xl">{titre}</h2>
            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
                {items.map((it, i) => (
                    <Reveal key={it.nom} delay={i * 0.06}>
                        <figure className="wiggle-hover overflow-hidden rounded-[2rem] border-2 border-border bg-white">
                            <img src={it.img} alt={it.nom} className="aspect-square w-full object-cover" />
                            <figcaption className="p-4">
                                <p className="font-display text-lg">{it.nom}</p>
                                <p className="text-sm text-muted-foreground">{it.note}</p>
                            </figcaption>
                        </figure>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export const RecetteSection = ({ nom, temps, ingredients, etapes }) => (
    <section className="mx-auto max-w-[72rem] px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
                <div className="overflow-hidden rounded-[2.5rem] border-2 border-border">
                    <img src={IMG.soupe} alt={`Recette : ${nom}`} className="aspect-[4/3] w-full object-cover" />
                </div>
            </Reveal>
            <Reveal delay={0.1}>
                <p className="font-display text-sm uppercase tracking-[0.2em] text-[hsl(var(--primary))]">La recette</p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">{nom}</h2>
                <p className="mt-2 text-muted-foreground">{temps}</p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                        <h3 className="font-display text-lg">Dans le panier</h3>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                            {ingredients.map((x) => <li key={x}>· {x}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-display text-lg">À quatre mains</h3>
                        <ol className="mt-2 space-y-2 text-muted-foreground">
                            {etapes.map((x, i) => <li key={x}><span className="font-bold text-foreground">{i + 1}.</span> {x}</li>)}
                        </ol>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
);

export const PostcardGallery = ({ titre, cartes }) => (
    <section className="mx-auto max-w-[90rem] px-5 pb-24">
        <h2 className="font-display text-3xl sm:text-4xl">{titre}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cartes.map((c, i) => (
                <Reveal key={c.titre} delay={i * 0.07}>
                    <article
                        className="wiggle-hover overflow-hidden rounded-[1.5rem] border-2 border-border bg-white shadow-[6px_8px_0_hsl(30_40%_85%)]"
                        style={{ transform: `rotate(${i % 2 ? 1.2 : -1.2}deg)` }}
                    >
                        <img src={c.img} alt={c.titre} className="aspect-[3/2] w-full object-cover" />
                        <div className="border-t-2 border-dashed border-border p-4">
                            <p className="font-display text-lg">{c.titre}</p>
                            <p className="text-sm text-muted-foreground">{c.mot}</p>
                        </div>
                    </article>
                </Reveal>
            ))}
        </div>
    </section>
);
