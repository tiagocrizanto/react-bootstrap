import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Container
} from 'reactstrap';

import logo from '../../assets/images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img className="header-logo" src={logo} alt="Vaquinha Pet" />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="#">Crie sua campanha</a></li>
                                    <li><a href="#">Nossas campanhas</a></li>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Contato</a></li>
                                </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="https://www.facebook.com/vaquinhapet" className="facebook left social-header" target="_blank">
                                    <i className="icon-facebook left social-icons"></i>
                                    <span className="social-text-header"></span>
                                </a>
                                <a href="https://www.instagram.com/vaquinhapet" className="instagram left social-header" target="_blank">
                                    <i className="icon-instagram left social-icons"></i>
                                    <span className="social-text-header"></span>
                                </a>
                                <a href="https://www.twitter.com/vaquinhapet" className="twitter left social-header" target="_blank">
                                    <i className="icon-twitter left social-icons"></i>
                                    <span className="social-text-header"></span>
                                </a>
                            </li>
                        </ul>
                    </Collapse >
                </Container >
            </Navbar >
        </div >
    );
}

export default Header;