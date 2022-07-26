import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from "../Assets/logo.png"
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const NavBarView = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">

            <Navbar.Brand >
                <NavLink to="/">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Bootstrap-Dash
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 " />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Nav>
                <Nav>

                    <NavDropdown title="MyPage" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#components/charts">
                            Profile
                        </NavDropdown.Item>
                        {/*<NavDropdown.Item href="#components/news">News</NavDropdown.Item>*/}
                        {/*<NavDropdown.Item href="#components/tables">Tables</NavDropdown.Item>*/}
                        {/*<NavDropdown.Item href="#components/menus">Menus</NavDropdown.Item>*/}
                        {/*<NavDropdown.Divider />*/}
                        {/*<NavDropdown.Item href="#components/typography">Typography</NavDropdown.Item>*/}
                        {/*<NavDropdown.Item href="#components/others">Others</NavDropdown.Item>*/}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBarView