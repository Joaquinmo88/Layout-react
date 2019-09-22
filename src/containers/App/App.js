import React from "react";

import AppRouter from "./AppRouter";
import LayoutHome from "../Layouts/layout-home";

export default class App extends React.Component {
    render() {
        const { url } = this.props.match;
        // console.log("url_: ", url);
        return (
            <LayoutHome>
                <AppRouter url={url} />
            </LayoutHome>
        )
    }
}