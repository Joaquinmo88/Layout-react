import React from "react";
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { WrapperLogin } from './style';
const { Content } = Layout;


export default class LayoutAuth extends React.Component {
    render() {
        return (
            <Layout className="wrapper-login">
                <WrapperLogin>
                    <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Link to="dashboard" style={{fontSize: '14px', padding: '0.5rem 1rem', border: '2px solid #fff', borderRadius: 6}}>{this.props.children}</Link>
                    </Content >
                </WrapperLogin>
            </Layout >
        )
    }
}