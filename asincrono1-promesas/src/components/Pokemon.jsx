import { useEffect, useState } from 'react';

export const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=3")
            .then((res) => res.json())
            .then((data) => {
                const fetches = data.results.map((p) => fetch(p.url).then((res) => res.json()));
                Promise.all(fetches).then((pokemonData) => setPokemons(pokemonData));
            });
    }, []);

    return (
        <div className="card">
            <h2 className="card-title">Pokémon</h2>
            {pokemons.map(({ id, name, sprites, types }) => (
                <div key={id} className="item">
                    <img src={sprites.front_default} alt={name} className="image" />
                    <p className="name capitalize">{name}</p>
                    <p className="type">Type: {types.map((t) => t.type.name).join(", ")}</p>
                </div>
            ))}
        </div>
    );
};
