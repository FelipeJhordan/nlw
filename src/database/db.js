// const db = require('sqlite-async');
const Database = require('sqlite-async');
//criar a tabelas do banco de dados
function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );
        
        CREATE TABLE IF NOT EXISTS class(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            weekday INTEGER,
            class_id INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `);
}
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)