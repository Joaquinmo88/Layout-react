import React from "react";
import { Link } from 'react-router-dom';
import HeaderB2BComponent from "../../components/Header/header-b2b-component";
import Nav from "../../components/Nav/nav-component";

import { images } from '../../constants';

import { Layout, Icon, Tooltip } from 'antd';
const { Header, Content, Sider, Footer } = Layout;


const contacto = {
    FAX: "FAX",
    ENL: "ENL",
    DIRGRAL: "Ciudad de México | T. (+52 55) 4210.9900",
    DIRFAX: "CL 147 17 78 OF 204, Bogotá D.C.",
}

class LayoutHome extends React.Component {

    constructor(props) {
        super();
    }

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        // console.log(this.props)
        // console.log("collapsed: ", this.state.collapsed)

        const { collapsed } = this.state;

        return (
            <Layout style={{ height: "100vh" }}>
                <Header className="header">
                    <HeaderB2BComponent />
                </Header>
                <Nav />
                <Layout className="layout-page">


                    <Sider
                        breakpoint="lg"
                        onCollapse={(collapsed, type) => { this.setState({ collapsed: collapsed }); }}
                        collapsed={collapsed}
                        className="layout-sider">

                        <span className="sider-close" onClick={this.toggle}>
                            <Icon type={collapsed ? "right" : "left"} />
                        </span>

                        <div className="layout-sider-logo">
                            <img src={images.b2b} alt="logo" />
                        </div>

                        <ul className={`sider-nav-list ${collapsed ? 'sider-active' : null}`}>
                            <li>
                                <Tooltip placement="right" title={collapsed ? 'Descargas' : ''}>
                                    <Link to="#"><Icon type="download" /><span>Descargas</span></Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip placement="right" title={collapsed ? 'Correo' : ''}>
                                    <Link to="#"><Icon type="mail" /><span>Correo</span></Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip placement="right" title={collapsed ? 'Excel' : ''}>
                                    <Link to="#"><Icon type="file-excel" /><span>Excel</span></Link>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip placement="right" title={collapsed ? 'Cancelar' : ''}>
                                    <Link to="#"><Icon type="close-circle" /><span>Cancelar</span></Link>
                                </Tooltip>
                            </li>
                        </ul>
                    </Sider>

                    <Content>
                        <Layout className="layout-body">
                            {this.props.children}
                        </Layout>
                        <Footer className="layout-footer">
                            <div className="content-logo">
                                <img src={images.ams_blanco} alt="" />
                            </div>
                            <div className="content-contacto">
                                <span className="FooterText">{`© ${(new Date().getFullYear())} APPLICATION AND MANAGED SERVICES S.A. DE C.V.`}</span>
                                <span className="FooterText">{`Todos los derechos reservados | ${contacto.DIRGRAL}`} <a style={{ color: 'white' }} href="http://www.enlacesams.mx"> AMS.com </a></span>
                            </div>
                        </Footer>
                    </Content>



                </Layout>
            </Layout >
        )
    }
}

export default LayoutHome;