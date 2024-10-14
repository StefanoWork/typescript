"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PiattaformaApprendimento = exports.Corso = exports.Studente = void 0;
class Studente {
    constructor(nome, cognome, specializzazione, esperienza, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }
    iscrivitiCorso(corso) {
        corso.aggiungiIscritto(this);
    }
}
exports.Studente = Studente;
class Corso {
    constructor(titolo, descrizione, docente, durata, elencoIscritti) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.docente = docente;
        this.durata = durata;
        this.elencoIscritti = elencoIscritti;
    }
    aggiungiIscritto(studente) {
        this.elencoIscritti.push(studente);
    }
}
exports.Corso = Corso;
class PiattaformaApprendimento {
    constructor(nome, tipo, descrizione, categorieContenuto) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }
    pubblicaRecensione(studente, recensione) {
        console.log(`Lo studente ${studente.nome} ha pubblicato la recensione: ${recensione}`);
    }
}
exports.PiattaformaApprendimento = PiattaformaApprendimento;
