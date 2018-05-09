import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import Footer from './Footer';

class App extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    };

    navSelect = key => {
        switch (key) {
        case 'home':
            this.context.router.push('/');
            break;
        case 'place':
            this.context.router.push('/place');
            break;
        case 'power_plate':
            this.context.router.push('/power-plate');
            break;
        case 'kinesis':
            this.context.router.push('/kinesis');
            break;
        case 'trx':
            this.context.router.push('/trx');
            break;
        case 'pilates':
            this.context.router.push('/pilates');
            break;
        case 'outdoors-training':
            this.context.router.push('/programs#outdoors-training');
            break;
        case 'programs':
            this.context.router.push('/programs');
            break;
        default:
            break;
        }
    };

    componentDidMount() {
        this.sliderFix();
    }

    sliderFix = () => {
        setInterval(() => {
            let images = document.getElementsByClassName('slide-img');
            for (let i = 0; i < images.length; ++i) {
                let imageH = images[i].offsetHeight;
                let parentH = images[i].parentNode.parentNode.offsetHeight;
                images[i].style.top = (parentH - imageH)/2 + 'px'
            }
        }, 1000);
    }

    render() {
        const {children} = this.props;

        return (
            <div className="App">
                <Navbar className='top-navbar'>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>
                                <img
                                    src='/static/images/logo.png'
                                    alt='Puregym'
                                    className='navbar-logo'
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight onSelect={this.navSelect} className='nav-items'>
                            <NavItem eventKey='home' className={this.props.location.pathname === '/' ? 'active' : ''}>
                                <span> _ΤΟ ΓΥΜΝΑΣΤΗΡΙΟ</span>
                            </NavItem>
                            <NavItem eventKey='place' className={this.props.location.pathname === '/place' ? 'active' : ''}>
                                <span> _Ο ΧΩΡΟΣ</span>
                            </NavItem>
                            <NavDropdown title='_ΟΙ ΥΠΗΡΕΣΙΕΣ' id='services_list'>
                                <MenuItem eventKey='power_plate'>
                                    <span>Power Plate</span>
                                </MenuItem>
                                <MenuItem eventKey='kinesis'>
                                    <span>Kinesis</span>
                                </MenuItem>
                                <MenuItem eventKey='trx'>
                                    <span>TRX Training</span>
                                </MenuItem>
                                <MenuItem eventKey='pilates'>
                                    <span>Pilates</span>
                                </MenuItem>
                                <MenuItem eventKey='outdoors-training'>
                                    <span>Κατ' οίκον προπόνηση</span>
                                </MenuItem>
                                <MenuItem eventKey='programs' className='last'>
                                    <span>Προγράμματα</span>
                                </MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {children}

                {this.props.location.pathname !== '/' ? (<Footer />) : ''}
            </div>
        );
    }
}

export default App;
