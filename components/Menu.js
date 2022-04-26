import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">WallBotz 🤖</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>

                        <NavItem>
                            <NavLink href="/">Início</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/projeto">Projeto</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink href="/eventos">Eventos</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/equipe">Equipe</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/quemsomos">Quem Somos</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Menu