
import { TypePokemon } from "../lib/type";
import { TypeBattleArmor } from "../lib/type";
import { TypeSpecies } from "../lib/type";

/**
* Effettua una chiamata HTTP all'URL configurato per ottenere i dati del Pokémon dalla prima API.
* L'URL è recuperato dalla variabile d'ambiente `POKEMON_API_URL_1`.
* 
* @returns {Promise<TypePokemon>} - I dati ottenuti dalla chiamata API.
* @throws {Error} - Se l'URL non è configurato o se si verifica un errore nella chiamata API.
*/
export const fetchPokemonData1 = async (): Promise<TypePokemon> => {
    const url = process.env.POKEMON_API_URL_1;

    if (!url) throw new Error('URL POKEMON_API_URL_1 non configurato');

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 1: ${response.statusText}`);
    }
    const data = await response.json();
    const pokemon: TypePokemon = {
        nome: data.name,
        tipo: data.types[0].type.name,
        peso: data.weight,
        immagine: data.spirites.front_default,
    }
    return pokemon;

}

/**
 * Effettua una chiamata HTTP all'URL configurato per ottenere i dati del Pokémon dalla seconda API.
 * L'URL è recuperato dalla variabile d'ambiente `POKEMON_API_URL_2`.
 * 
 * @returns {Promise<TypeBattleArmor>} - I dati ottenuti dalla chiamata API.
 * @throws {Error} - Se l'URL non è configurato o se si verifica un errore nella chiamata API.
 */
export const fetchPokemonData2 = async (): Promise<TypeBattleArmor> => {
    const url = process.env.POKEMON_API_URL_2;

    if (!url) throw new Error('URL POKEMON_API_URL_2 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 2: ${response.statusText}`);
    }
    const data = await response.json();
    const BattleArmor: TypeBattleArmor = {
        nome: data.name,
        url: data.URL,
    }
    return BattleArmor;
    
}

/**
 * Effettua una chiamata HTTP all'URL configurato per ottenere i dati del Pokémon dalla terza API.
 * L'URL è recuperato dalla variabile d'ambiente `POKEMON_API_URL_3`.
 * 
 * @returns {Promise<TypeSpecies>} - I dati ottenuti dalla chiamata API.
 * @throws {Error} - Se l'URL non è configurato o se si verifica un errore nella chiamata API.
 */
export const fetchPokemonData3= async (): Promise<TypeSpecies> => {
    const url = process.env.POKEMON_API_URL_3;

    if (!url) throw new Error('URL POKEMON_API_URL_3 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 3: ${response.statusText}`);
    }
        const data = await response.json();
        const Species: TypeSpecies = {
            nome: data.name,
            url: data.URL,
            slot: data.slot,
    }
    return Species;
}
