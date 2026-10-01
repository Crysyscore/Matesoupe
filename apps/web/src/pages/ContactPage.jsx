import React from 'react';
import { Helmet } from 'react-helmet';
import { BookOpen, Palette, Sparkles, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SiteLayout from '@/components/SiteLayout';
import KidMailForm from '@/components/KidMailForm';

const offres = [
    { icon: BookOpen, titre: 'Séances de lecture', texte: 'Lecture animée du tome 1 ou 2, 30 à 45 minutes, en médiathèque, école ou crèche.' },
    { icon: Palette, titre: 'Ateliers pédagogiques', texte: 'Atelier goût et dessin : on touche, on sent, on peint son propre légume debout.' },
    { icon: Sparkles, titre: 'Fiches personnalisées', texte: 'Fiches pédagogiques adaptées à votre projet, votre niveau et votre saison.' },
    { icon: Users, titre: 'Fresque du goût', texte: 'Fresque collective peinte avec un groupe d’enfants, à garder dans vos murs.' },
];

const ContactPage = () => (
    <SiteLayout>
        <Helmet>
            <title>Contact : enfants, écoles et partenaires | Matesoupe</title>
            <meta name="description" content="Écrire à Matesoupe : formulaire ludique pour les enfants, et offres pour les écoles, associations et organismes — ateliers, lectures, fresque du goût." />
        </Helmet>

        <section className="mx-auto max-w-[56rem] px-5 py-16">
            <h1 className="font-display text-4xl sm:text-5xl">Vous souhaitez m’envoyer un courrier ou un dessin ?</h1>
            <p className="mt-3 text-lg text-muted-foreground">
                Ici, c’est la boîte aux lettres des enfants. Écris comme tu parles, on répond toujours.
            </p>
            <div className="mt-8">
                <KidMailForm type="enfant" />
            </div>
        </section>

        <section className="border-t-2 border-border bg-[hsl(var(--muted))] py-20">
            <div className="mx-auto max-w-[72rem] px-5">
                <p className="font-display text-sm uppercase tracking-[0.2em] text-[hsl(var(--primary))]">Professionnels &amp; partenaires</p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">Associations, écoles et organismes affiliés</h2>
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                    {offres.map((o, i) => (
                        <Reveal key={o.titre} delay={i * 0.06}>
                            <article className="rounded-[2rem] border-2 border-border bg-white p-6">
                                <o.icon className="h-7 w-7 text-[hsl(var(--primary))]" strokeWidth={2} />
                                <h3 className="mt-3 font-display text-xl">{o.titre}</h3>
                                <p className="mt-2 text-muted-foreground">{o.texte}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
                <div className="mt-12">
                    <h3 className="font-display text-2xl">Parlons de votre projet</h3>
                    <div className="mt-6">
                        <KidMailForm type="pro" />
                    </div>
                </div>
            </div>
        </section>
    </SiteLayout>
);

export default ContactPage;
