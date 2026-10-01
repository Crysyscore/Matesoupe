import React, { useState } from 'react';
import { Loader2, Send, Sparkles } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

const field =
    'w-full rounded-2xl border-2 border-border bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[hsl(var(--primary))]';

const KidMailForm = ({ type = 'enfant' }) => {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setStatus('loading');
        setError('');

        try {
            await pb.collection('courriers').create({
                nom: (data.get('nom') || '').toString().trim(),
                age: (data.get('age') || '').toString().trim(),
                email: (data.get('email') || '').toString().trim(),
                organisation: (data.get('organisation') || '').toString().trim(),
                message: (data.get('message') || '').toString().trim(),
                type,
            });
            e.target.reset();
            setStatus('done');
        } catch (err) {
            setError(err?.message || 'Le facteur a trébuché, réessaie dans un instant.');
            setStatus('error');
        }
    };

    if (status === 'done') {
        return (
            <div className="rounded-[2rem] border-2 border-dashed border-[hsl(var(--primary))] bg-white p-8 text-center">
                <Sparkles className="mx-auto h-8 w-8 text-[hsl(var(--accent))]" />
                <p className="mt-3 font-display text-2xl">Ton courrier est parti !</p>
                <p className="mt-2 text-muted-foreground">
                    Coco baignoire l&apos;emmène jusqu&apos;à la Baie de la Soupe Fumante. Réponse très bientôt.
                </p>
                <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-5 min-h-[44px] rounded-full bg-[hsl(var(--secondary))] px-5 font-bold text-[hsl(var(--secondary-foreground))]"
                >
                    Écrire une autre lettre
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="rounded-[2rem] border-2 border-border bg-white p-6 shadow-[6px_8px_0_hsl(30_40%_85%)] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor={`nom-${type}`} className="font-display text-base">
                        {type === 'enfant' ? 'Ton prénom' : 'Votre nom'}
                    </label>
                    <input id={`nom-${type}`} name="nom" required maxLength={120} className={field} placeholder={type === 'enfant' ? 'Imaya' : 'Nom et fonction'} />
                </div>
                {type === 'enfant' ? (
                    <div className="flex flex-col gap-2">
                        <label htmlFor="age-enfant" className="font-display text-base">Ton âge</label>
                        <input id="age-enfant" name="age" maxLength={20} className={field} placeholder="6 ans et demi" />
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <label htmlFor="organisation-pro" className="font-display text-base">École, association, structure</label>
                        <input id="organisation-pro" name="organisation" maxLength={200} className={field} placeholder="École des Tilleuls" />
                    </div>
                )}
                <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor={`email-${type}`} className="font-display text-base">
                        {type === 'enfant' ? 'E-mail d’un parent (pour la réponse)' : 'E-mail'}
                    </label>
                    <input id={`email-${type}`} name="email" type="email" className={field} placeholder="parent@exemple.fr" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor={`message-${type}`} className="font-display text-base">
                        {type === 'enfant' ? 'Ta lettre ou la description de ton dessin' : 'Votre projet'}
                    </label>
                    <textarea
                        id={`message-${type}`}
                        name="message"
                        required
                        rows={5}
                        maxLength={4000}
                        className={`${field} resize-y`}
                        placeholder={type === 'enfant' ? 'Bonjour Matesoupe, j’ai dessiné une coco baignoire avec...' : 'Atelier pédagogique, séance de lecture, fresque du goût...'}
                    />
                </div>
            </div>

            {status === 'error' && <p className="mt-4 text-sm font-semibold text-[hsl(var(--destructive))]">{error}</p>}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-6 font-bold text-[hsl(var(--primary-foreground))] shadow-[0_6px_0_hsl(14_60%_45%)] transition-transform active:translate-y-[2px] active:shadow-[0_3px_0_hsl(14_60%_45%)] disabled:opacity-70"
            >
                {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {status === 'loading' ? 'Envoi du courrier...' : 'Poster ma lettre'}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
                Les dessins peuvent aussi être envoyés par la poste — demande à un adulte de nous écrire.
            </p>
        </form>
    );
};

export default KidMailForm;
