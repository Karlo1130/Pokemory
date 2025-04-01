class ApiRequest{

    static getPokemon(pokedexId){

        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexId}`)
        .then(response => {

            if (!response.ok) {
                throw new Error('Error en la peticion: ' + error.status);
            }

            return response.json();
        })
        .catch(error => console.error('Error:', error))

    }
}