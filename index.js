const fs = require('fs');
const path = require('path');
const Logger = require('./logger');

function eventAvertissement(data) {
    fs.appendFile(
        path.join(__dirname, './logs/messages.log',),
            `avertissement: { \n id: ${data.id}, temps: ${data.temps}, message: ${data.message},  usager: ${data.usager} },`,
                err => {
                    if (err) throw err;
                }
        
    )

    console.log(`avertissement: { \n    id: '${data.id}', \n    temps: '${data.temps}' \n    message: '${data.message}' \n    usager: '${data.usager}' \n }`)
}

function eventErreur(data) {
    fs.appendFile(
        path.join(__dirname, './logs/erreurs.log'),
            `erreur: { \n id: ${data.id}, temps: ${data.temps}, erreur: ${data.erreur}, usager: ${data.usager} },`,
                err => {
                    if (err) throw err;
                }
        
    )

    console.log(`erreur: { \n    id: '${data.id}', \n    temps: '${data.temps}' \n    erreur: '${data.erreur}' \n    usager: '${data.usager}' \n }`)
}

function eventInformation(data) {
    fs.appendFile(
        path.join(__dirname, './logs/informations.log'),
            `information: { \n id: ${data.id}, temps: ${data.temps}, info: ${data.info}, usager: ${data.usager} },`,
                err => {
                    if (err) throw err;
                }
        
    )

    console.log(`information: { \n    id: '${data.id}', \n    temps: '${data.temps}' \n    info: '${data.info}' \n    usager: '${data.usager}' \n }`)
}

let monJournal = new Logger();

monJournal.on('avertissement', (data) => eventAvertissement(data));
monJournal.on('information', (data) => eventInformation(data));
monJournal.on('erreur', (data) => eventErreur(data));

monJournal.log('joseph', 'Salut');
monJournal.error('bob', 'voici l erreur');
monJournal.log('joseph', '2e message');
monJournal.log('joseph', 'encore kekchose');
monJournal.info('lucie', 'autre truc');
monJournal.error('bob', 'voici l erreur');
monJournal.log('joseph', '2e message');
monJournal.log('joseph', 'encore kekchose');
monJournal.info('lucie', 'autre truc');
monJournal.error('sylvie', 'erreur le fichier est introuvable');
monJournal.log('marc', 'le dossier a ete cree');
monJournal.log('joseph', 'le fichier a ete renomme');
monJournal.info('lucie', 'les permissions ont ete changees');
monJournal.error('paul', 'la base de donnees a ete supprimee');