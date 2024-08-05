export async function fetchPokemonData1(): Promise<any> {
    const url = process.env.POKEMON_API_URL_1;
    if (!url) throw new Error('URL POKEMON_API_URL_1 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 1: ${response.statusText}`);
    }
    return response.json();
}

export async function fetchPokemonData2(): Promise<any> {
    const url = process.env.POKEMON_API_URL_2;
    if (!url) throw new Error('URL POKEMON_API_URL_2 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 2: ${response.statusText}`);
    }
    return response.json();
}

export async function fetchPokemonData3(): Promise<any> {
    const url = process.env.POKEMON_API_URL_3;
    if (!url) throw new Error('URL POKEMON_API_URL_3 non configurato');
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore nella chiamata API 3: ${response.statusText}`);
    }
    return response.json();
}
