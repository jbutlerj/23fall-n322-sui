import React from "react";
import "semantic-ui-css/semantic.css";
import "@/styles/globals.css";
import { Menu, Input, Button } from "semantic-ui-react";
import Link from "next/link";

// TODO: Add comments to code!!!
// TODO: Style

export default function App({ Component, pageProps }) {
    const [showSearch, setShowSearch] = React.useState("");

    function updateSearch(e, { value }) {
        setShowSearch(value);
    }

    return (
        <>
            <Menu className=".menu">
                <Menu.Item as={Link} href="/">
                    Home
                </Menu.Item>
                <Menu.Item as={Link} href="/">
                    Fake
                </Menu.Item>
                <Menu.Item as={Link} href="/">
                    Fake
                </Menu.Item>
                <Menu.Item as={Link} href="/">
                    Fake
                </Menu.Item>
                <Menu.Item position="right">
                    <Input
                        name="showSearch"
                        onChange={updateSearch}
                        value={showSearch}
                    />
                    <Button color="blue" as={Link} href={`/show/${showSearch}`}>
                        Search
                    </Button>
                </Menu.Item>
            </Menu>
            <Component {...pageProps} />
        </>
    );
}
