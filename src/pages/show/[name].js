import React from "react";
import { useRouter } from "next/router";
import { Loader, Image, Card, Label, Icon } from "semantic-ui-react";
import styles from "@/styles/Show.module.css";

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

    return (
        <>
            <Loader
                active={showInfo.loading || showInfo.name == router.query.name}
            />
            {
                // if this statement
                showInfo.id ? (
                    // true - then do this
                    <>
                        <Card>
                            <Image
                                src={showInfo.image.medium}
                                alt={showInfo.name}
                            ></Image>
                            <Label>
                                <Icon name="star" /> {showInfo.rating.average}
                            </Label>
                            <Card.Content>
                                <Card.Header>{showInfo.name}</Card.Header>
                                <Card.Description>
                                    {showInfo.summary}
                                </Card.Description>
                            </Card.Content>
                        </Card>
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
