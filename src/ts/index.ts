const pokemonTableCnt = document.getElementById('pokemonTable');

async function consultPokemons(url: string) {
    const request = await fetch(url);
    const data: Pokemon = await request.json();
    pokemonTable(data);
}

function pokemonTable(data: Pokemon) {
    console.log('llegue aca - function pokemon table');
    
    let fragment = `
        <table class='tablePokemon'>
            <tr>
                <th class="nameColumn">NAME</th>
                <th class="urlColumn">URL</th>
                <th class="urlColumn">VIEW</th>
            </tr>
    `;

    data.results.forEach(element => {
        fragment += `
            <tr>
                <td>${element.name}</td>
                <td>${element.url}</td>
                <td><a class='btn' href="pokemon.html?namePokemon=${element.name}">Watch</a></td>
            </tr>
        `;
    });

    fragment += '</table>';

    if (pokemonTableCnt) {
        pokemonTableCnt.innerHTML = fragment;
    } 
}

let url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40';

consultPokemons(url);
