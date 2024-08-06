type data1 = {
    name: string
    weight: number
};
type data2 = {
    name: string
    weight: number
};
type data3 = {
    name: string
    weight: number
};

const fetchPokemonData1 = async (): Promise<data1> => {
    try {
        const response = await fetch('https://api.https://pokeapi.co/api/v2/pokemon/squirtle.com/data1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: data1 = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data 1:', error);
        throw error;
    }
};

// Funzione per la seconda chiamata API
const fetchPokemonData2 = async (): Promise<data2> => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: data2 = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data 2:', error);
        throw error;
    }
};

// Funzione per la terza chiamata API
const fetchPokemonData3 = async (): Promise<data3> => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: data3 = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data 3:', error);
        throw error;
    }
};

// Chiamata alle tre funzioni
const fetchAllData = async () => {
    try {
        const data1 = await fetchPokemonData1();
        console.log('Data 1:', data1);

        const data2 = await fetchPokemonData2();
        console.log('Data 2:', data2);

        const data3 = await fetchPokemonData3();
        console.log('Data 3:', data3);
    } catch (error) {
        console.error('Error fetching all data:', error);
    }
};

fetchAllData();
