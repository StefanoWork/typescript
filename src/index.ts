import {Studente, Corso, PiattaformaApprendimento} from "./classes"

//Creazione degli studenti
const studente1 = new Studente("Mario", "Rossi", "Frontend", 2, ["Tecnologia", "Sport"]);
const studente2 = new Studente("Luca", "Verdi", "Backend", 3, ["Musica", "Cucina"]);
const studente3 = new Studente("Paolo", "Neri", "Fullstack", 1, ["Cinema", "Viaggi"]);

//Creazione dei corsi
const corso1 = new Corso("Corso di React", "Impara React da zero", "Stefano Bianchi", 10, []);
const corso2 = new Corso("Corso di Node.js", "Impara Node.js da zero", "Giuseppe Verdi", 15, []);
const corso3 = new Corso("Corso di Angular", "Impara Angular da zero", "Elisa Rossi", 20, []);

//Iscrizione degli studenti ai corsi
studente1.iscrivitiCorso(corso1);
studente2.iscrivitiCorso(corso2);
studente3.iscrivitiCorso(corso3);

//Creazione delle piattaforme di apprendimento
const piattaforma1 = new PiattaformaApprendimento("Udemy", "E-learning", "Piattaforma di corsi online", ["Tecnologia", "Cucina"]);
const piattaforma2 = new PiattaformaApprendimento("Coursera", "E-learning", "Piattaforma di corsi online", ["Tecnologia", "Musica"]);
const piattaforma3 = new PiattaformaApprendimento("Skillshare", "E-learning", "Piattaforma di corsi online", ["Tecnologia", "Sport"]);

//Pubblicazione delle recensioni
piattaforma1.pubblicaRecensione(studente1, "Corso molto interessante, lo consiglio!");
piattaforma2.pubblicaRecensione(studente2, "Corso ben strutturato, molto utile!");
piattaforma3.pubblicaRecensione(studente3, "Corso molto completo, lo consiglio assolutamente!");

//Verifica del funzionamento del codice
console.log(corso1.elencoIscritti);
console.log(corso2.elencoIscritti);
console.log(corso3.elencoIscritti);