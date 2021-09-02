const fs = require('fs');
const path = require('path');
const Logger = require('./logger');
const monJournal = new Logger();

function toto(data) {
    console.log('avertissement:', data);
    fs.appendFile(
        path.join(__dirname, 'test', 'salut.txt'),
        `avertissement: { \n id: ${data.id}, temps: ${data.temps} },`,
        err => {
            if (err) throw err;
        }
    )
}

monJournal.on('avertissement', (data) => toto(data));
monJournal.on('information', (data) => console.log('information:', data));
monJournal.on('erreur', (data) => console.log('monJournal erreur:', data));

monJournal.on('message', (data) => console.log('monJournal msg: ', data));

monJournal.log('ALLO?????????');
monJournal.log('HEY...');

