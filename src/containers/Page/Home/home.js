import React from "react";
import { Layout } from 'antd';

import './style.scss';

export default class HomeComponent extends React.Component {


    onChange = (a, b, c) => {
        console.log(a, b, c);
    }

    render() {
        return (
            <Layout>
                
            </Layout>
        )
    }
}