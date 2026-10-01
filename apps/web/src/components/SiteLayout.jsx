import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV, ETSY_SHOP } from '@/lib/site';
const Marquee = () => <div className="overflow-hidden border-y border-border bg-[hsl(var(--secondary))] py-2">
        <div className="marquee-track gap-10 text-sm font-semibold uppercase tracking-widest text-[hsl(var(--secondary-foreground))]">
            {[0, 1].map(k => <span key={k} className="flex gap-10 pr-10"><span>MATESOUPE</span><span>·</span><span>INFUSION DU ROYAUME</span><span>·</span><span>Carte d'Imaya</span><span>·</span><span>Recettes à quatre mains</span><span>·</span><span>Coloriages à imprimer</span><span>·</span></span>)}
        </div>
    </div>;
const SiteLayout = ({
  children
}) => {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen paper">
            <header className="sticky top-0 z-40 border-b border-border bg-[hsl(var(--background)/0.92)] backdrop-blur">
                <div className="mx-auto flex max-w-[90rem] items-center gap-4 px-5 py-3">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="Logo Matesoupe" className="h-10 w-10 sm:h-12 sm:w-12" />
                        <span className="font-display text-lg leading-tight text-[hsl(var(--primary))] sm:text-xl">
                            Les Aventures de<br className="hidden sm:block" /> Matesoupe
                        </span>
                    </Link>
                    <nav className="ml-auto hidden items-center gap-1 lg:flex">
                        {NAV.map(n => <NavLink key={n.to} to={n.to} className={({
            isActive
          }) => `rounded-full px-3 py-2 text-sm font-semibold transition-colors ${isActive ? 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]' : 'text-muted-foreground hover:text-foreground'}`}>
                                {n.label}
                            </NavLink>)}
                    </nav>
                    <a href={ETSY_SHOP} target="_blank" rel="noreferrer" className="ml-auto inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-4 py-2 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-[0_6px_0_hsl(14_60%_45%)] transition-transform active:translate-y-[2px] active:shadow-[0_3px_0_hsl(14_60%_45%)] lg:ml-0">
                        <ShoppingBag className="h-4 w-4" strokeWidth={2.2} />
                        <span className="hidden sm:inline">Boutique Etsy</span>
                    </a>
                    <button type="button" onClick={() => setOpen(v => !v)} aria-label="Ouvrir le menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border lg:hidden">
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
                {open && <nav className="border-t border-border px-5 pb-4 lg:hidden">
                        {NAV.map(n => <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="block min-h-[44px] py-2 font-semibold text-foreground">
                                {n.label}
                            </NavLink>)}
                    </nav>}
            </header>

            <Marquee />
            <main>{children}</main>

            <footer className="mt-24 border-t border-border bg-[hsl(var(--muted))]">
                <div className="mx-auto grid max-w-[72rem] gap-8 px-5 py-14 sm:grid-cols-3">
                    <div>
                        <p className="font-display text-lg text-[hsl(var(--primary))]">Les Aventures de Matesoupe</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Albums illustrés, recettes et coloriages pour faire aimer les légumes aux enfants.
                        </p>
                    </div>
                    <div className="text-sm">
                        <p className="font-display text-base">Se promener</p>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                            {NAV.map(n => <li key={n.to}>
                                    <Link to={n.to} className="hover:text-foreground">{n.label}</Link>
                                </li>)}
                        </ul>
                    </div>
                    <div className="text-sm">
                        <p className="font-display text-base">Écrire &amp; commander</p>
                        <p className="mt-2 text-muted-foreground">bonjour@matesoupe.fr</p>
                        <a href={ETSY_SHOP} target="_blank" rel="noreferrer" className="mt-2 inline-block font-semibold text-[hsl(var(--primary))]">
                            Commandez votre exemplaire
                        </a>
                        <p className="mt-4 text-xs text-muted-foreground">© {new Date().getFullYear()} Matesoupe</p>
                    </div>
                </div>
            </footer>
        </div>;
};
export default SiteLayout;