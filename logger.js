const uuid = require('uuid');
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(nom, message) {
        let maDate = new Date().toLocaleString();
        this.emit('avertissement', { id: uuid.v4(), temps: maDate, message: message, usager: nom });
    }

    error(nom, message) {
        let maDate = new Date().toLocaleString();
        this.emit('erreur', { id: uuid.v4(), temps: maDate, erreur: message, usager: nom });
    }

    info(nom, message) {
        let maDate = new Date().toLocaleString();
        this.emit('information', { id: uuid.v4(), temps: maDate, info: message, usager: nom });
    }
}

module.exports = Logger;