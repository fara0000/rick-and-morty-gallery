export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

interface Result<Data> {
    info: Info;
    results: Array<Data>;
}

interface CharacterEntity {
    name: string;
    url: string;
}

export type Url = string;
export type Status = 'Alive' | 'Dead' | 'unknown';

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterEntity;
    location: CharacterEntity;
    image: string;
    episode: Url[];
    url: Url;
    created: string;
}