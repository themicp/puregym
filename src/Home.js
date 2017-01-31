import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import Slider from 'react-slick';

class Home extends Component {
    render() {
        const sliderSettings = {
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            dots: true,
        };
        const facebook_width = window.innerWidth < 500 ? 250 : 340;

        return (
            <div className='container about-container'>
                <div className='row'>
                    <Panel header='_ΤΟ ΓΥΜΝΑΣΤΗΡΙΟ' className='home-panel about-panel col-md-12 col-lg-12'>
                        <Slider {...sliderSettings} className='home-slide pics-slide'>
                            <div className='slide-div'><img className='slide-img' src='images/11.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/12.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/13.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/14.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/15.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/16.jpg' role='presentation' /></div>
                        </Slider>
                        <p>Τεχνολογία και τεχνογνωσία. Υψηλή αισθητική και lifestyle υπηρεσίες που παρουσιάζονται για πρώτη φορά. Ολοκληρωμένα προγράμματα προσωπικής εκγύμνασης βασισμένα στις ανάγκες και τους στόχους του κάθε μέλους.</p>
                        <p>Σε ένα χώρο 250τμ κορυφαίου κατασκευαστικού σχεδιασμού, συγκεντρώσαμε όλα τα τελευταίας τεχνολογίας συστήματα εκγύμνασης που, στα χέρια των πτυχιούχων γυμναστών μας, μετατρέπουν τους στόχους και τα όνειρα σας σε πραγματικότητα.</p>

                        <p>Με την πλέον ολοκληρωμένη δέσμη υπηρεσιών, το <strong>Pure</strong> αποτελεί το μοναδικό προορισμό για εσάς που θέλετε να νιώσετε υγιείς, νέοι, ξεκούραστοι, να χάσετε τα περιττά κιλά, να βελτιώσετε τις αθλητικές σας επιδόσεις, να αποκτήσετε ευλυγισία και τελικά το σώμα που πάντα ονειρευόσασταν, γρήγορα και εύκολα, υπό την συνεχή παρακολούθηση των πλέον εξειδικευμένων <strong>Personal Trainers</strong> και επιστημονικών συμβούλων.</p>
                    </Panel>

                    <Panel header='Πληροφορίες' className='info-panel col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-7'>
                            <ListGroup className='info-list'>
                                <ListGroupItem header='Διεύθυνση'><a target='_blank' rel='noopener' href='https://www.google.com/maps?ll=37.85502,23.766117&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=13272110595612858678'>Λεωφόρος Βουλιαγμένης 170, Γλυφάδα, Αττική</a></ListGroupItem>
                                <ListGroupItem header='Τηλέφωνο'>210 8949875, 6909158702</ListGroupItem>
                                <ListGroupItem header='E-Mail'>puregymgr@gmail.com</ListGroupItem>
                                <ListGroupItem header='Ώρες και ημέρες'>Δευτέρα-Παρασκευή: 07.00 - 22.00 <br />Σάββατο-Κυριακή: 09.00-16.00</ListGroupItem>
                            </ListGroup>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-5 facebook-widget'>
                            <iframe src={'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPure-Gym-%CE%93%CE%BB%CF%85%CF%86%CE%AC%CE%B4%CE%B1-741204552621019%2F&tabs=timeline&width=' + facebook_width + '&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1033197230108095'} width={facebook_width} height='500'  scrolling='no' frameBorder='0' allowTransparency='true'></iframe>
                        </div>
                    </Panel>

                    <div className='alert note' role='alert'>Το πρώτο personal αξιολόγησης φυσικής κατάστασης <strong>εντελώς δωρεάν</strong> τώρα στο <strong>Pure</strong>.</div>
                </div>
            </div>
        );
    }
}

export default Home;
