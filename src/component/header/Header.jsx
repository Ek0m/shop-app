import React from "react";
import './header.css';

import { NavLink } from "react-router-dom";

import {motion} from 'framer-motion';

import Logo from "../../assets/images/eco-logo.png";
import UserIcon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";


const nav__links = [
    {
        path: 'home',
        display: 'Home'
    },

    {
        path: 'shop',
        display: 'Shop'
    },

    {
        path: 'cart',
        display: 'Cart'
    }
]

function Header(){
    return(
        <header className="header">
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={Logo} alt="logo"  />
                            <div>
                                <h1>Home-mart</h1>
                                
                            </div>
                        </div>

                        <div className="navigation">
                            <ul className="menu">
                                
                                { nav__links.map((item, index) => (
                                        <li className="nav__item" key={index}>
                                        <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                                </li>
                                ))}

                            </ul>
                        </div>

                        <div className="nav__icons">

                            <span className="fav__icon">
                                <span className="badge">1</span>
                                <i class="ri-heart-line"></i>
                            </span>

                            <span className="cart__icon">
                                <span className="badge">1</span>
                                <i class="ri-shopping-bag-line"></i>
                            </span>

                            <span> <motion.img whileTap={{scale: 1.2}} src={UserIcon} alt=""/> </span>
                        </div>

                        <div className="mobile__menu">
                            <span>
                                <i class="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header;