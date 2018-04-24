import Dexie from 'dexie';

const db = new Dexie('InventorySoftwareDB');
db.version(1).stores({
    users: '[userId+pwd]',
});

export default db;
