import React from 'react';
import { Helmet } from 'react-helmet';
import SiteLayout from '@/components/SiteLayout';
import { FoodGallery, PostcardGallery, RecetteSection, TomeIntro } from '@/components/TomeSections';
import { ETSY_TOME2, IMG } from '@/lib/site';

const Tome2Page = () => (
    <SiteLayout>
        <Helmet>
            <title>Tome 2 — Le Marché des Lanternes | Matesoupe</title>
            <meta name="description" content="Tome 2 des Aventures de Matesoupe : le marché flottant des lanternes, les aliments de l'histoire, la recette du velouté du soir et trois cartes postales." />
        </Helmet>
        <TomeIntro
            perso={IMG.perso2}
            kicker="Tome 2"
            titre="Le Marché des Lanternes"
            palette="hsl(196 70% 92%)"
            paragraphes={[
                'La nuit tombe sur la rivière et les étals s’allument. Barnabé y échange une poignée de baies contre une histoire, et découvre que les fruits changent de nom selon celui qui les mange.',
                'Un second album plus nocturne, encre et gouache, sur le partage et le courage de goûter l’inconnu.',
            ]}
            etsy={ETSY_TOME2}
        />
        <FoodGallery
            titre="Les aliments du marché"
            items={[
                { img: IMG.tomate, nom: 'Tomates du soir', note: 'Rondes comme des lanternes.' },
                { img: IMG.poireau, nom: 'Poireaux d’argent', note: 'On les tresse pour porter chance.' },
                { img: IMG.courge, nom: 'Courges lanternes', note: 'Creusées, elles éclairent le quai.' },
                { img: IMG.carottes, nom: 'Bottes de carottes', note: 'La monnaie du marché flottant.' },
            ]}
        />
        <RecetteSection
            nom="Le velouté du soir aux lanternes"
            temps="30 minutes · pour 4 bols · dès 4 ans avec un adulte"
            ingredients={['2 poireaux', '2 pommes de terre', '1 petite courge', 'Bouillon de légumes', 'Quelques croûtons dorés', 'Un peu de persil']}
            etapes={[
                'On émince les poireaux ensemble, doucement.',
                'On fait suer 5 minutes puis on ajoute courge et pommes de terre.',
                'On couvre de bouillon, on laisse frémir 20 minutes.',
                'On mixe et on pose les croûtons comme des lanternes.',
            ]}
        />
        <PostcardGallery
            titre="Trois cartes postales du marché"
            cartes={[
                { img: IMG.cartesPostales, titre: 'Quai des Lanternes', mot: '« Ici, les bateaux sentent la soupe. »' },
                { img: IMG.tome2, titre: 'Rivière d’Ambre', mot: '« J’ai goûté une baie bleue, elle chantait. »' },
                { img: IMG.carte, titre: 'Retour vers Imaya', mot: '« On rentre par le nord, la voile sent la courge. »' },
            ]}
        />
    </SiteLayout>
);

export default Tome2Page;
