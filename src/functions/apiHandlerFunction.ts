import { HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { fetchPokemonData1, fetchPokemonData2, fetchPokemonData3 } from './../services/pokemonService';
import { TypeBattleArmor, TypePokemon, TypeSpecies } from '../lib/type';

export const getPokemonDataFromAPI1 = async (context: InvocationContext): Promise<TypePokemon> => {
    try {
        const data1 = await fetchPokemonData1();
        context.log('Dati API1 recuperati con successo');
        return data1;
    } catch (error) {
        const errorMessage = (error as Error).message;
        context.log(`Errore nella chiamata API1: ${errorMessage}`);
        throw new Error('Errore nel recupero dei dati dall\'API1.');
    }
}

export const getPokemonDataFromAPI2 = async (context: InvocationContext): Promise<TypeBattleArmor> => {
    try {
        const data2 = await fetchPokemonData2();
        context.log('Dati API2 recuperati con successo');
        return data2;
    } catch (error) {
        const errorMessage = (error as Error).message;
        context.log(`Errore nella chiamata API2: ${errorMessage}`);
        throw new Error('Errore nel recupero dei dati dall\'API2.');
    }
}

export const getPokemonDataFromAPI3 = async (context: InvocationContext): Promise<TypeSpecies> => {
    try {
        const data3 = await fetchPokemonData3();
        context.log('Dati API3 recuperati con successo');
        return data3;
    } catch (error) {
        const errorMessage = (error as Error).message;
        context.log(`Errore nella chiamata API3: ${errorMessage}`);
        throw new Error('Errore nel recupero dei dati dall\'API3.');
    }
}
