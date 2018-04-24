import Dexie from 'dexie';

const db = new Dexie('ReactSampleDB');
db.version(1).stores({
    users: '++id',
});

export default db;
