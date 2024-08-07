export type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    baseExperience?: number;
    species: {
        name: string;
        url: string;
    };
};


export type Location = {
    id: number;
    name: string;
}

export type Move = {
    id: number;
    name: string;
    accuracy: number;
    effect_chance: number;
    pp: number;
    priority: number;
    power: number;
};

