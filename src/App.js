import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';
import './App.css';
import Slider from 'react-slick';

class App extends Component {
    render() {
        const {children} = this.props;

        return (
            <div className="App">
                <Navbar className='top-navbar'>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>
                                <img
                                    src='http://puregym.gr/images/logo.png'
                                    alt='Puregym'
                                    className='navbar-logo'
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className='nav-items'>
                            <NavItem className='active'>
                                <span> _ΤΟ ΓΥΜΝΑΣΤΗΡΙΟ</span>
                            </NavItem>
                            <NavItem>
                                <span> _Ο ΧΩΡΟΣ</span>
                            </NavItem>
                            <NavItem>
                                <span> _ΟΙ ΥΠΗΡΕΣΙΕΣ</span>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {children}

                <footer>
                </footer>
            </div>
        );
    }
}

export default App;
