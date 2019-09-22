import React from "react";
import LayoutAuth from "../../Layouts/layout-auth";

export default class Home extends React.Component {
    render() {
        return (
            <LayoutAuth>
                <h1 style={{margin: 0, fontSize: '22px'}}>Iniciar Session</h1>  
            </LayoutAuth>
        )
    }
}