/// <reference path="../database-types.d.ts" />

migrate(
    (app) => {
        const c = new Collection({
            name: 'courriers',
            type: 'base',
            listRule: null,
            viewRule: null,
            createRule: '',
            updateRule: null,
            deleteRule: null,
            fields: [
                { name: 'nom', type: 'text', required: true, max: 120 },
                { name: 'age', type: 'text', required: false, max: 20 },
                { name: 'email', type: 'email', required: false },
                { name: 'message', type: 'text', required: true, max: 4000 },
                { name: 'type', type: 'select', required: true, maxSelect: 1, values: ['enfant', 'pro'] },
                { name: 'organisation', type: 'text', required: false, max: 200 },
                { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
            ],
        });

        app.save(c);
    },
    (app) => {
        const c = app.findCollectionByNameOrId('courriers');

        app.delete(c);
    },
);
