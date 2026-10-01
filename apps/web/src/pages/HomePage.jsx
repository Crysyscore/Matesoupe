import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SiteLayout from '@/components/SiteLayout';
import { ETSY_SHOP, IMG } from '@/lib/site';
const bulles = [{
  img: IMG.cocoBaignoire,
  titre: 'La coco baignoire',
  texte: 'Une demi-noix de coco devenue baignoire-bateau : c’est là que tout a commencé, un soir de bain et de purée renversée.'
}, {
  img: IMG.bain,
  titre: 'Le bain aux légumes',
  texte: 'Canard, cuillère en bois et morceaux de courge : goûter avec les mains avant de goûter avec la bouche.'
}, {
  img: IMG.atelier,
  titre: 'Nous, à quatre mains',
  texte: 'Un duo : l’une écrit les histoires du goût, l’autre peint les îles. Papier, gouache et beaucoup de miettes.'
}];
const HomePage = () => <SiteLayout>
        <Helmet>
            <title>Les Aventures de Matesoupe — livres illustrés du goût pour enfants</title>
            <meta name="description" content="Univers poétique et gourmand pour enfants : albums illustrés, coco baignoire, recettes de soupe, carte d'Imaya, coloriages et fiches pédagogiques." />
        </Helmet>

        <section className="relative mx-auto max-w-[90rem] px-5 pt-8">
            <div className="relative min-h-[100dvh] overflow-hidden rounded-[2.5rem] border-2 border-border">
                <video className="absolute inset-0 h-full w-full object-cover" poster={IMG.heroGirl} autoPlay muted loop playsInline aria-label="Une petite fille lit Les Aventures de Matesoupe" />
                <img src={IMG.heroGirl} alt="Petite fille lisant l'album Les Aventures de Matesoupe" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20_40%_15%/0.82)] via-[hsl(20_40%_15%/0.3)] to-transparent" />
                <div className="relative flex min-h-[100dvh] flex-col justify-end p-6 sm:p-12">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-4 py-1.5 text-sm font-bold text-[hsl(var(--accent-foreground))]">
                        <Play className="h-3.5 w-3.5" /> La lecture du soir
                    </span>
                    <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                        Deux albums pour <span className="underline-marker text-[hsl(20_40%_18%)]">croquer</span> le monde
                    </h1>
                    <p className="mt-4 max-w-xl text-lg text-white/90">
                        Imaya navigue en coco baignoire d’île en île, goûte, se trompe, recommence. Une histoire, une recette, un souvenir de table.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <a href={ETSY_SHOP} target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-7 text-lg font-bold text-[hsl(var(--primary-foreground))] shadow-[0_7px_0_hsl(14_60%_42%)] transition-transform active:translate-y-[3px] active:shadow-[0_4px_0_hsl(14_60%_42%)]">
                            Commandez votre exemplaire <ArrowRight className="h-5 w-5" />
                        </a>
                        <Link to="/univers" className="inline-flex min-h-[52px] items-center rounded-full border-2 border-white/70 px-6 font-bold text-white">
                            Découvrir l’univers
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="mx-auto max-w-[72rem] px-5 py-24">
            <div className="grid items-center gap-10 md:grid-cols-2">
                <Reveal>
                    <div className="wiggle-hover overflow-hidden rounded-[2.5rem] border-2 border-border bg-white">
                        <img src={IMG.heroine} alt="Matesoupe, personnage principal au chapeau carotte" className="w-full object-cover" />
                    </div>
                </Reveal>
                <Reveal delay={0.12}>
                    <p className="font-display text-sm uppercase tracking-[0.2em] text-[hsl(var(--primary))]">Le concept</p>
                    <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">Un livre qui se lit, se cuisine et se raconte</h2>
                    <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            Chaque tome est un voyage : une île, un aliment, une émotion. À la fin de l’histoire, la recette attend l’enfant et son adulte,
                            avec des gestes simples et des mots doux.
                        </p>
                        <p>
                            Nos valeurs tiennent en trois mots : curiosité (goûter sans peur), lenteur (cuisiner ensemble) et fabrication artisanale
                            (illustrations peintes à la main, impression en France).
                        </p>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2 text-sm font-bold">
                        {['Dès 3 ans', 'Peint à la main', 'Recette incluse', 'Fiches pédagogiques'].map(t => <li key={t} className="rounded-full bg-[hsl(var(--secondary))] px-4 py-2 text-[hsl(var(--secondary-foreground))]">{t}</li>)}
                    </ul>
                </Reveal>
            </div>
        </section>

        <section className="border-y-2 border-border bg-[hsl(var(--muted))] py-24">
            <div className="mx-auto max-w-[90rem] px-5">
                <h2 className="font-display text-3xl sm:text-4xl">Qui nous sommes</h2>
                <p className="mt-2 max-w-2xl text-lg text-muted-foreground">Trois images, trois bulles, voici notre histoire.</p>
                <div className="mt-12 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
                    {bulles.map((b, i) => <Reveal key={b.titre} delay={i * 0.1}>
                            <article className="min-w-[16rem] md:min-w-0">
                                <div className={`wiggle-hover overflow-hidden rounded-[2rem] border-2 border-border bg-white ${i % 2 ? 'md:translate-y-6' : ''}`}>
                                    <img src={b.img} alt={b.titre} className="aspect-square w-full object-cover" />
                                </div>
                                <div className={`relative mt-5 rounded-[1.75rem] border-2 border-border bg-white p-5 ${i % 2 ? 'md:translate-y-6' : ''}`}>
                                    <span className="absolute -top-3 left-8 h-5 w-5 rotate-45 border-l-2 border-t-2 border-border bg-white" />
                                    <h3 className="font-display text-xl">{b.titre}</h3>
                                    <p className="mt-2 text-muted-foreground">{b.texte}</p>
                                </div>
                            </article>
                        </Reveal>)}
                </div>
            </div>
        </section>

        <section className="mx-auto max-w-[90rem] px-5 py-24">
            <h2 className="font-display text-3xl sm:text-4xl">Nos aventures</h2>
            <div className="mt-10 space-y-10">
                {[{
        to: '/tome-1',
        img: IMG.tome1,
        t: 'Tome 1 — Le Village Arc-En-Ciel',
        d: 'Direction artistique chaude : ocres, terres brûlées, papier grainé. Un village de maisons-légumes au coucher du soleil.'
      }, {
        to: '/tome-2',
        img: IMG.tome2,
        d: 'DA nocturne : bleus profonds, lanternes ambrées, encre et gouache. Le marché flottant où les fruits changent de nom.',
        t: 'Tome 2 — Le Marché des Lanternes'
      }].map((a, i) => <Reveal key={a.to} delay={0.08}>
                        <Link to={a.to} className={`grid items-center gap-8 rounded-[2.5rem] border-2 border-border bg-white p-6 transition-transform hover:-translate-y-1 md:grid-cols-2 md:p-8 ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
                            <div className="overflow-hidden rounded-[1.75rem]">
                                <img src={a.img} alt={a.t} className="aspect-[4/3] w-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl sm:text-3xl">{a.t}</h3>
                                <p className="mt-3 text-lg text-muted-foreground">{a.d}</p>
                                <span className="mt-5 inline-flex items-center gap-2 font-bold text-[hsl(var(--primary))]">
                                    Entrer dans le tome <ArrowRight className="h-4 w-4" />
                                </span>
                            </div>
                        </Link>
                    </Reveal>)}
            </div>
        </section>
    </SiteLayout>;
export default HomePage;