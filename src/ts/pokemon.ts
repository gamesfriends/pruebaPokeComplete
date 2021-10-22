const namePokemonTitle = document.getElementById('namePokemon');
const dataPokemonCnt = document.getElementById('dataPokemon');

const valores = window.location.search;
const urlParams = new URLSearchParams(valores);

var namePokemon = urlParams.get('namePokemon');
var urlPokemon: string = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;

async function consultPokemon(url: string) {
    const request = await fetch(url);
    const data: PokemonInd = await request.json();
    showInfo(data);
}

function showInfo(data: PokemonInd) {
    if (namePokemonTitle) namePokemonTitle.innerHTML = namePokemon == null ? '' : namePokemon.toString();
    let dataInsert = `
        <h3 class='secondTitle'>Abilities</h3>
        <ul class='abilityList'>
    `;
    data.abilities.forEach(element => {
        dataInsert += `
            <li class='ability abilitiesItem'><span class='abilityItem'>Name: ${element.ability.name}</span><span class='abilityItem'>Url: ${element.ability.url}</span><span class='abilityItem'>Oculto: ${element.is_hidden == true ? 'Si' : 'No'}</span><span class='abilityItem'>Slot: ${element.slot}</span></li>
        `;  
    });

    dataInsert += `
        </ul>
        <h3 class='secondTitle'>Experiencia base:</h3> 
        <p class='abilitiesItem'>Cantidad: ${data.base_experience}</p>
    `;

    if (dataPokemonCnt) {
        console.log(data);
        dataPokemonCnt.innerHTML = dataInsert;
    } 
}

consultPokemon(urlPokemon);
