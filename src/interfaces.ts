export interface IStudente {
    nome: string,
    cognome: string,
    specializzazione: string,
    esperienza: number, 
    interessi: string[],

    iscrivitiCorso(corso: ICorso) : void;
}

export interface ICorso {
    titolo: string,
    descrizione: string,
    docente: string,
    durata: number,
    elencoIscritti: IStudente[],

    aggiungiIscritto(studente: IStudente): void;
}

export interface IPiattaformaApprendimento {
    nome: string,
    tipo: string,
    descrizione: string,
    categorieContenuto: string[],

    pubblicaRecensione(studente: IStudente, recensione: string): void;
}