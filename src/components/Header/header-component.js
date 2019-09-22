import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase";
import { connect } from 'react-redux';
import { Input, Badge, Dropdown, Menu, Button } from 'antd';

import actions from "../../redux/auth/actions";

import cartIcon from "../../assets/icons/shopping-cart.svg";
import userIcon from "../../assets/icons/user.svg";


import { WrapperHeader } from "./style";


const Search = Input.Search;

class HeaderComponent extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user !== null) {
                this.props.setUser({
                    name: user.displayName,
                    email: user.email,
                    avatar: user.photoURL
                });
            }
        })
    }

    // signIn() {
    //     let provider = new firebase.auth.GoogleAuthProvider();

    //     firebase.auth().signInWithPopup(provider).then(response => {
    //         console.log(response)
    //     }).catch(err => {
    //         console.log(err)
    //     });
    // }

    render() {
        const { user } = this.props;

        return (
            <WrapperHeader>
                <li className="cnt-logo">
                    <Link to="/">Logo</Link>
                </li>
                <li className="cnt-search">
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                    />
                </li>
                <Dropdown overlay={() => (
                    <Menu>
                        <Menu.Item>
                            {/* <Link to="/signin">
                                <Button type="primary">Iniciar session</Button>
                            </Link> */}
                            <Link to="about">
                                About
                            </Link>
                        </Menu.Item>
                    </Menu>
                )
                } placement="bottomRight">
                    <li className="cnt-user">
                        <img src={user.avatar === '' ? userIcon : user.avatar} alt="" />
                    </li>
                </Dropdown>
                <li className="cnt-cart">
                    <Badge count={0} showZero>
                        <img src={cartIcon} alt="" />
                    </Badge>
                </li>
            </WrapperHeader>
        )
    }
}

function mapStateToProps(state) {
    return { user: state.Auth.user }
}

export default connect(mapStateToProps, actions)(HeaderComponent)