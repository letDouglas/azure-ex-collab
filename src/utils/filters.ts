import { Pokemon, Location, Move } from '../myFunctions-types/pokemonTypes';

export function filterPokemon(pokemon: Pokemon) {
    return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        baseExperience: pokemon.baseExperience,
        species: {
            name: pokemon.species.name,
            url: pokemon.species.url
        }
    };
}


export function filterLocation(location: Location) {
    return {
        id: location.id,
        name: location.name,
    }
}

export function filterMove(move: Move) {
    return {
        id: move.id,
        name: move.name,
        accuracy: move.accuracy,
        effect_chance: move.effect_chance,
        pp: move.pp,
        priority: move.priority,
        power: move.power,
    }
}