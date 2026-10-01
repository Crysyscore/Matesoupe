import React from 'react';
import { Helmet } from 'react-helmet';
import SiteLayout from '@/components/SiteLayout';
import { FoodGallery, RecetteSection, TomeIntro } from '@/components/TomeSections';
import { ETSY_TOME1, IMG } from '@/lib/site';

const Tome1Page = () => (
    <SiteLayout>
        <Helmet>
            <title>Tome 1 — Le Village des Légumes Debout | Matesoupe</title>
            <meta name="description" content="Tome 1 des Aventures de Matesoupe : le village des légumes debout, la galerie des aliments de l'histoire et la recette de la soupe de potimarron." />
        </Helmet>
        <TomeIntro
            perso={IMG.perso1}
            kicker="Tome 1"
            titre="Le Village des Légumes Debout"
            palette="hsl(45 95% 92%)"
            paragraphes={[
                'Imaya débarque en coco baignoire dans un village où les maisons sont des légumes : toits de courge, portes de poireau, cheminées de carotte. Personne n’y mange jamais deux fois la même couleur.',
                'Un album cartonné de 32 pages, peint à la gouache, pour apprivoiser les légumes qui font peur. À lire le soir, à cuisiner le lendemain.',
            ]}
            etsy={ETSY_TOME1}
        />
        <FoodGallery
            titre="Les aliments de l’histoire"
            items={[
                { img: IMG.courge, nom: 'Le potimarron', note: 'Le grand-père du village, tout rond et sucré.' },
                { img: IMG.carottes, nom: 'Les carottes', note: 'Les jumelles croquantes des collines.' },
                { img: IMG.poireau, nom: 'Poireau & pomme de terre', note: 'Les danseurs du potager.' },
                { img: IMG.tomate, nom: 'La tomate', note: 'Celle qui rougit quand on la regarde.' },
            ]}
        />
        <RecetteSection
            nom="La soupe orange de Matesoupe"
            temps="25 minutes · pour 4 bols · dès 3 ans avec un adulte"
            ingredients={['1/2 potimarron', '3 carottes', '1 pomme de terre', '1 filet d’huile d’olive', 'Une pincée de muscade', 'Un nuage de crème']}
            etapes={[
                'L’enfant lave et compte les légumes à voix haute.',
                'L’adulte coupe en cubes, l’enfant les jette dans la casserole.',
                'On couvre d’eau, on laisse chanter 20 minutes.',
                'On mixe, on goûte, on ajoute le nuage de crème.',
            ]}
        />
    </SiteLayout>
);

export default Tome1Page;
