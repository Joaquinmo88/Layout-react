import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div className="wrapper-nav">
                <Navbar className="d-flex flex-row-reverse" expand="md" light>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="justify-content-end" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/dashboard/about">Menu 1</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="#">Menu 2</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="#">Menu 3</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="#">Menu 4</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="#">Menu 5</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="#">Menu 6</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}