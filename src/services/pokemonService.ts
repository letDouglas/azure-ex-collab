import { Pokemon, Location, Move } from './../utils/pokemonTypes';
import { filterPokemon, filterLocation, filterMove } from './../utils/filters';

export async function fetchRandomPokemon(): Promise<Pokemon> {
    const randomId = Math.floor(Math.random() * 20) + 1;
    const url = `${process.env.POKEMON_API_URL_1}${randomId}`;
    if (!url) throw new Error('URL POKEMON_API_URL_1 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 1: ${response.statusText}`);
    }
    const data = await response.json();
    return filterPokemon(data);
}

export async function fetchRandomLocation(): Promise<Location> {
    const randomId = Math.floor(Math.random() * 10) + 1;
    const url = `${process.env.POKEMON_API_URL_2}${randomId}`;
    if (!url) throw new Error('URL POKEMON_API_URL_2 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 2: ${response.statusText}`);
    }
    const data = await response.json();
    return filterLocation(data);
}

export async function fetchRandomMove(): Promise<Move> {
    const randomId = Math.floor(Math.random() * 10) + 1;
    const url = `${process.env.POKEMON_API_URL_3}${randomId}`;
    if (!url) throw new Error('URL POKEMON_API_URL_3 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 3: ${response.statusText}`);
    }
    const data = await response.json();
    return filterMove(data);
}
