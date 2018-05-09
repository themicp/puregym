import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Slider from 'react-slick';

class Place extends Component {
    render() {
        const sliderSettings = {
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            dots: true
        };

        return (
            <div className='container about-container'>
                <div className='row'>
                    <Panel header='_Ο ΧΩΡΟΣ' className='place-panel about-panel col-md-12 col-lg-12'>
                        <p>To <strong>Pure</strong> είναι έτοιμο να σας υποδεχτεί στις νέες υπερσύγχρονες εγκαταστάσεις του στην καρδιά της Γλυφάδας, σε δυο διαφορετικά επίπεδα που περιλαμβάνουν: <strong>Plate Personal Training, Kinesis Studios, πολυτελές Relax Room και σύγχρονες αίθουσες ομαδικών προγραμμάτων.</strong></p>

                        <p>Παράλληλα, στο <strong>Pure</strong> σας περιμένουν πολυτελή και άνετα αποδυτήρια, όπου θα βρείτε είδη προσωπικής υγιεινής για να μπορείτε να απολαύσετε ένα χαλαρωτικό ντους μετά από την κάθε επίσκεψη σας.</p>

                        <p>Τέλος η <strong>στάθμευση</strong> του αυτοκινήτου σας δεν πρέπει να σας προβληματίζει, καθώς το club βρίσκεται σε σημείο που επιτρέπει τη γρήγορη και εύκολη πρόσβαση.</p>
                    </Panel>

                    <Panel header='Φωτογραφίες' className='info-panel col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <Slider {...sliderSettings} className='place-slide pics-slide'>
                            <div className='slide-div'><img className='slide-img' src='/static/images/2.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/11.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/12.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/13.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/14.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/pilates/4.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/4.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/1.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/7.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/15.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/16.jpg' role='presentation' /></div>
                        </Slider>
                    </Panel>

                    <div className='alert note' role='alert'>Ανακαλύψτε το <strong>Pure</strong>: ανακαλύψτε ένα νέο τρόπο ζωής και ζήστε με διαφορά ενα καλύτερο αύριο.</div>
                </div>
            </div>
        );
    }
}

export default Place;
