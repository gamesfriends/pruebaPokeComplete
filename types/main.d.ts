interface User {
    id: number;
    name: string;
    lastname: string;
}

interface Pokemon {
    results: [
        {
            name: string,
            url: string
        }
    ]
}

interface PokemonInd {
    abilities: [
        {
            ability: {
                name: string,
                url: string
            }
            is_hidden: boolean,
            slot: number
        }
    ],
    base_experience: number
}