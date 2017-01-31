import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Footer extends Component {

    componentDidMount() {
        let initF = function() {
            window['FB'].init({
                appId      : '628473703941306',
                xfbml      : true,
                version    : 'v2.2'
            });
        };

        if (typeof FB === 'undefined') {
            window.fbAsyncInit = initF;
        } else {
            initF();
        }

        (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 facebook-widget'>
                        <div className="fb-like-box" data-href="https://www.facebook.com/pages/Pure-Lifestyle-Training/741204552621019" data-width="250" data-height="180" data-colorscheme="light" data-show-faces="true" data-header="false" data-stream="false" data-show-border="false"></div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                        <ListGroup className='info-list'>
                            <ListGroupItem className='col-xs-12 col-sm-6' header='Διεύθυνση'><a target='_blank' rel='noopener' href='https://www.google.com/maps?ll=37.85502,23.766117&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=13272110595612858678'>Λεωφόρος Βουλιαγμένης 170, Γλυφάδα, Αττική</a></ListGroupItem>
                            <ListGroupItem className='col-xs-12 col-sm-6' header='Τηλέφωνο'>210 8949875, 6909158702</ListGroupItem>
                            <ListGroupItem className='col-xs-12 col-sm-6' header='E-Mail'>puregymgr@gmail.com</ListGroupItem>
                            <ListGroupItem className='col-xs-12 col-sm-6' header='Ώρες και ημέρες'>Δευτέρα-Παρασκευή: 07.00 - 22.00 <br />Σάββατο-Κυριακή: 09.00-16.00</ListGroupItem>
                        </ListGroup>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
