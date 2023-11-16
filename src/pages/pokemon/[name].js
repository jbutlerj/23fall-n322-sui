import React from "react";
import { useRouter } from "next/router";
import { Loader, Image } from "semantic-ui-react";

export default function PokemonName() {
    const [showInfo, setShowInfo] = React.useState({ loading: true });
    const router = useRouter();

    React.useEffect(function () {
        if (showInfo.show.name !== router.query.name && router.query.name) {
            console.log("Load in TV Show Info");
            fetch(`https://api.tvmaze.com/search/shows?q=/${router.query.name}`)
                .then((r) => r.json())
                .then(function (r) {
                    setShowInfo(r);
                })
                .catch((e) =>
                    setShowInfo({ loading: false, name: router.query.name })
                );
        }
    });

    return (
        <>
            <h1>TV Show Name: {router.query.name}</h1>
            <Loader
                active={showInfo.loading || showInfo.name !== router.query.name}
            />
            {
                // if this statement
                showInfo.id ? (
                    // true - then do this
                    <>
                        <Image
                            src={showInfo.show.image.medium}
                            alt={router.query.name}
                        ></Image>
                        <h5>Height: {showInfo.height}</h5>
                        <h5>Weight: {showInfo.weight}</h5>
                    </>
                ) : (
                    // false - else do this
                    <>
                        {showInfo.name !== router.query.name ? (
                            <h2>Searching for Pokemon</h2>
                        ) : (
                            <h2>Pokemon Not Found</h2>
                        )}
                    </>
                )
            }
        </>
    );
}
