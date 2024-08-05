Azure Function per Chiamate API Pokémon

Questo progetto contiene un'Azure Function scritta in TypeScript che effettua chiamate a tre API pubbliche dei Pokémon e restituisce i dati aggregati in una risposta JSON.
Panoramica

La funzione apiCallerFunction:

    Effettua chiamate simultanee a tre URL delle API dei Pokémon.
    Aggrega i risultati delle chiamate API.
    Restituisce i dati aggregati come risposta JSON.

Prerequisiti

    Azure Functions Core Tools: Installare seguendo la guida ufficiale di Microsoft.
    Node.js: Versione LTS 14 o successiva.
    Yarn: (Facoltativo) - CI SONO SIA IL FILE yarn.lock SIA package-lock.json. O si usa yarn o npm. Uno dei due va eliminato.
    TypeScript: Assicurati che sia installato globalmente. INDICARE STRICT MODE A TRUE

Configurazione

    Clona il Repository

    Clona il repository con il link fornito e accedi alla directory del progetto.

    Installa le Dipendenze

    Esegui il comando per installare tutte le dipendenze del progetto.

    Configura le Variabili d'Ambiente

    Modifica il file local.settings.json per includere le URL delle API dei Pokémon. Inserisci le seguenti chiavi e valori:
        POKEMON_API_URL_1: URL per la prima API dei Pokémon.
        POKEMON_API_URL_2: URL per la seconda API dei Pokémon.
        POKEMON_API_URL_3: URL per la terza API dei Pokémon.

Esecuzione

    Avvia la Funzione Localmente

    Avvia il servizio Azure Functions nella tua macchina locale.

    Testa la Funzione

    Usa strumenti come Thunder Client, Postman, o curl per inviare una richiesta GET all'endpoint http://localhost:7071/api/apiCallerFunction e verificare la risposta.

Struttura del Progetto

    src/: Contiene il codice sorgente delle Azure Functions.
    local.settings.json: Contiene le variabili d'ambiente locali.
    host.json: Configurazione dell'host di Azure Functions.
    package.json: Gestisce le dipendenze del progetto.

Contribuire

Per contribuire al progetto:

    Fai un fork del repository.
    Crea un branch per le tue modifiche.
    Invia una pull request con le modifiche.
