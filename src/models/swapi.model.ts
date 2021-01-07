export interface SwapiResponse<T = any> {
    count: number;
    next: string;
    previous: string;
    results: T;
}

export interface Starship { // https://swapi.dev/documentation#starships
    name : string;
    films : string[];
    length : string;
    created: string;
}

export interface Starships {
    items: Starship[];
}
