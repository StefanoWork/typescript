import {IStudente, ICorso, IPiattaformaApprendimento} from './interfaces';

export class Studente implements IStudente {
    constructor(public nome: string, public cognome: string, public specializzazione: string, public esperienza: number, public interessi: string[]) {}

    iscrivitiCorso(corso: ICorso): void {
        corso.aggiungiIscritto(this);    
    }
}

export class Corso implements ICorso {
    constructor(public titolo: string, public descrizione: string, public docente: string, public durata: number, public elencoIscritti: IStudente[]) {}

    aggiungiIscritto(studente: IStudente): void {
        this.elencoIscritti.push(studente);
    }
}

export class PiattaformaApprendimento implements IPiattaformaApprendimento {
    constructor(public nome: string, public tipo: string, public descrizione: string, public categorieContenuto: string[]) {}

    pubblicaRecensione(studente: IStudente, recensione: string): void {
        console.log(`Lo studente ${studente.nome} ha pubblicato la recensione: ${recensione}`);
    }
}