import React from 'react';
import { useRouter } from 'next/router';
import { Loader, Image } from 'semantic-ui-react';

export default function PokemonName() {
    const [pokemonInfo, setPokemonInfo] = React.useState({ loading: true });
    const router = useRouter();
    
    React.useEffect(function() {
        if(pokemonInfo.name !== router.query.name && router.query.name) {
            console.log('Load in Pokemon Info');
            fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
                .then((r) => r.json())
                .then(function (r) {
                    setPokemonInfo(r);
                })
                .catch((e) => setPokemonInfo({ loading: false, name: router.query.name }));
        }
    });

    return (
        <>
            <h1>Pokemon Name: {router.query.name}</h1>
            <Loader active={pokemonInfo.loading || pokemonInfo.name !== router.query.name } />
            {
                // if this statement
                pokemonInfo.id ? (
                    // true - then do this
                    <>
                        <Image src={pokemonInfo.sprites.front_default} alt="Pokemon"></Image>
                        <h5>Height: {pokemonInfo.height}</h5>
                        <h5>Weight: {pokemonInfo.weight}</h5>
                    </>
                    ) : (
                        // false - else do this
                    <>
                        {(pokemonInfo.name !== router.query.name) ? <h2>Searching for Pokemon</h2> : <h2>Pokemon Not Found</h2>}
                    </>
                    )
            }
        </>
    )
}