import React from "react";
import { Grid, Image } from "semantic-ui-react";
import styles from "@/styles/Home.module.css";

// TODO: Add comments to code!!!
// TODO: Style

export default function Home() {
    return (
        <>
            <div className={styles.hero}>
                <Grid>
                    <Grid.Column className={styles.left} width={10}>
                        <h1 className={styles.wordmark}>
                            The TV Show Database
                        </h1>
                    </Grid.Column>
                </Grid>
                <Image.Group className={styles.posters}>
                    <Image
                        src="iasip.jpg"
                        alt="It's Always Sunny in Philadelphia"
                    />
                    <Image src="b99.jpg" alt="Brooklyn Nine-Nine" />
                    <Image src="greys.jpg" alt="Grey's Anatomy" />
                    <Image src="fullhouse.jpg" alt="Full House" />
                    <Image src="homeimprovement.jpg" alt="Home Improvement" />
                    <Image src="newgirl.jpg" alt="New Girl" />
                </Image.Group>
            </div>
        </>
    );
}
