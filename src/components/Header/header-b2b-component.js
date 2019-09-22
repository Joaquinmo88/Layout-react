import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, Dropdown } from 'antd';
import { images } from '../../constants';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="#">INICIO</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to="#">FACTURACIÓN</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to="#">CONFIGURACIÓN</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            <Link to="#">PERFIL</Link>
        </Menu.Item>
    </Menu>
);


class HeaderB2BComponent extends React.Component {


    render() {

        return (
            <div className="wrapper-header-b2b">
                <div className="container-logo"><img src={images.enlace} alt="" /></div>
                <div className="container-menu">
                    <div className="title-header">CONSULTA DE CANCELACIONES</div>


                    <div className="nav-header">
                        <div className="btn-group d-block d-lg-block d-xl-none">
                            <Dropdown overlay={menu}>
                                <Link className="ant-dropdown-link" to="#">
                                    Acciones <Icon type="setting" />
                                </Link>
                            </Dropdown>
                        </div>
                        <ul className="d-none d-xl-block">
                            <li><Link to="#">INICIO</Link></li>
                            <li><Link to="#">FACTURACIÓN</Link></li>
                            <li><Link to="#">CONFIGURACIÓN</Link></li>
                            <li><Link to="#">PERFIL</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}



export default HeaderB2BComponent;