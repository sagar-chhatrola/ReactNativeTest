export interface Show {
    url: string;
    name: string;
    language: string;
}

export interface SearchShow {
    show: Show;
    score: number;
}

export type ShowsResponse = Show[];
export type SearchShowsResponse = SearchShow[];

interface PersonImage {
    medium: string;
    original: string;
}

interface Country {
    name: string;
}

export interface People {
    name: string;
    url?:any;
    country: Country;
    image: PersonImage;
    gender?:any;
    birthday?:any
}

export interface SearchPeople{
    person: People
    score: number
}

export type PeoplesResponse = SearchPeople[];