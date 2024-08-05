/**
 * Effettua una chiamata HTTP all'URL configurato per ottenere i dati del Pokémon dalla prima API.
 * L'URL è recuperato dalla variabile d'ambiente `POKEMON_API_URL_1`.
 * 
 * @returns {Promise<any>} - I dati ottenuti dalla chiamata API.
 * @throws {Error} - Se l'URL non è configurato o se si verifica un errore nella chiamata API.
 */
export async function fetchPokemonData1(): Promise<any> {
    const url = process.env.POKEMON_API_URL_1;
    if (!url) throw new Error('URL POKEMON_API_URL_1 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 1: ${response.statusText}`);
    }
    return response.json();
}

/**
 * Effettua una chiamata HTTP all'URL configurato per ottenere i dati del Pokémon dalla seconda API.
 * L'URL è recuperato dalla variabile d'ambiente `POKEMON_API_URL_2`.
 * 
 * @returns {Promise<any>} - I dati ottenuti dalla chiamata API.
 * @throws {Error} - Se l'URL non è configurato o se si verifica un errore nella chiamata API.
 */
export async function fetchPokemonData2(): Promise<any> {
    const url = process.env.POKEMON_API_URL_2;
    if (!url) throw new Error('URL POKEMON_API_URL_2 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 2: ${response.statusText}`);
    }
    return response.json();
}

/**
 * Effettua una chiamata HTTP all'URL configurato per ottenere i dati del Pokémon dalla terza API.
 * L'URL è recuperato dalla variabile d'ambiente `POKEMON_API_URL_3`.
 * 
 * @returns {Promise<any>} - I dati ottenuti dalla chiamata API.
 * @throws {Error} - Se l'URL non è configurato o se si verifica un errore nella chiamata API.
 */
export async function fetchPokemonData3(): Promise<any> {
    const url = process.env.POKEMON_API_URL_3;
    if (!url) throw new Error('URL POKEMON_API_URL_3 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 3: ${response.statusText}`);
    }
    return response.json();
}
