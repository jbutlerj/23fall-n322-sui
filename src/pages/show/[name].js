import React from "react";
import { useRouter } from "next/router";
import { Loader, Image } from "semantic-ui-react";

// TODO: Add comments to code!!!

export default function ShowName() {
    const [showInfo, setShowInfo] = React.useState({ loading: true });
    const router = useRouter();

    React.useEffect(function () {
        if (showInfo.searchName !== router.query.name && router.query.name) {
            console.log("Load in TV Show Info");
            fetch(`https://api.tvmaze.com/search/shows?q=/${router.query.name}`)
                .then((r) => r.json())

                .then(function (showResults) {
                    const firstShow = showResults[0];

                    console.log(firstShow);

                    firstShow.show.searchName = router.query.name;

                    setShowInfo(firstShow.show);
                })
                .catch((e) =>
                    setShowInfo({
                        loading: false,
                        searchName: router.query.name,
                    })
                );
        }
    });

    console.log(
        "test",
        showInfo.name,
        "test2",
        router.query.name,
        "test3",
        showInfo.loading
    );

    // const summary = showInfo.summary;
    // const summaryRegex = summary.replace(/<\/?[^>]+(>|$)/g, "");
    // console.log(summaryRegex);

    return (
        <>
            <h1>TV Show Name: {router.query.name}</h1>
            <Loader
                active={showInfo.loading || showInfo.name == router.query.name}
            />
            {
                // if this statement
                showInfo.id ? (
                    // true - then do this
                    <>
                        <Image
                            src={showInfo.image.medium}
                            alt={router.query.name}
                        ></Image>
                        <h5>{showInfo.summary}</h5>
                        <h5>Current Status: {showInfo.status}</h5>
                        <h5>Premier Date: {showInfo.premiered}</h5>
                        <h5>Rating: {showInfo.rating.average}</h5>
                        <h5>Current Network: {showInfo.network.name}</h5>
                    </>
                ) : (
                    // false - else do this
                    <>
                        {showInfo.searchName !== router.query.name ? (
                            <h2>Searching for TV Show</h2>
                        ) : (
                            <h2>TV Show Not Found</h2>
                        )}
                    </>
                )
            }
        </>
    );
}
