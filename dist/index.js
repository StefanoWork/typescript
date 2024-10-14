"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
//Creazione degli studenti
const studente1 = new classes_1.Studente("Mario", "Rossi", "Frontend", 2, ["Tecnologia", "Sport"]);
const studente2 = new classes_1.Studente("Luca", "Verdi", "Backend", 3, ["Musica", "Cucina"]);
const studente3 = new classes_1.Studente("Paolo", "Neri", "Fullstack", 1, ["Cinema", "Viaggi"]);
//Creazione dei corsi
const corso1 = new classes_1.Corso("Corso di React", "Impara React da zero", "Stefano Bianchi", 10, []);
const corso2 = new classes_1.Corso("Corso di Node.js", "Impara Node.js da zero", "Giuseppe Verdi", 15, []);
const corso3 = new classes_1.Corso("Corso di Angular", "Impara Angular da zero", "Elisa Rossi", 20, []);
//Iscrizione degli studenti ai corsi
studente1.iscrivitiCorso(corso1);
studente2.iscrivitiCorso(corso2);
studente3.iscrivitiCorso(corso3);
//Creazione delle piattaforme di apprendimento
const piattaforma1 = new classes_1.PiattaformaApprendimento("Udemy", "E-learning", "Piattaforma di corsi online", ["Tecnologia", "Cucina"]);
const piattaforma2 = new classes_1.PiattaformaApprendimento("Coursera", "E-learning", "Piattaforma di corsi online", ["Tecnologia", "Musica"]);
const piattaforma3 = new classes_1.PiattaformaApprendimento("Skillshare", "E-learning", "Piattaforma di corsi online", ["Tecnologia", "Sport"]);
//Pubblicazione delle recensioni
piattaforma1.pubblicaRecensione(studente1, "Corso molto interessante, lo consiglio!");
piattaforma2.pubblicaRecensione(studente2, "Corso ben strutturato, molto utile!");
piattaforma3.pubblicaRecensione(studente3, "Corso molto completo, lo consiglio assolutamente!");
//Verifica del funzionamento del codice
console.log(`corso1:  + ${JSON.stringify(corso1.elencoIscritti)}`);
console.log(`corso2:  + ${JSON.stringify(corso2.elencoIscritti)}`);
console.log(`corso3:  + ${JSON.stringify(corso3.elencoIscritti)}`);
