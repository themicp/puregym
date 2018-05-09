import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Slider from 'react-slick';

class Trx extends Component {
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
                    <Panel header='TRX Training' className='trx-panel about-panel col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <p>Το <strong>TRX</strong> είναι ένα σύστημα προπόνησης που βασίζεται στη χρήση των ιμάντων και κατά το οποίο το σώμα γυμνάζεται από την αντίσταση που δημιουργεί το ίδιο του το βάρος.<br />Οι ιμάντες <strong>TRX</strong> αποτελούν ένα όργανο γυμναστικής με πολύπλευρες δυνατότητες εκγύμνασης του σώματος, καθώς μπορούν να δημιουργηθούν εκατοντάδες συνδυασμοί ασκήσεων που γυμνάζουνε όλες τις μυϊκές ομάδες.</p>

                        <p>H λειτουργική προπόνηση με το <strong>TRX</strong> σμιλεύει όλο το σώμα με τρόπο αρμονικό επιτυγχάνοντας γράμμωση, σύσφιξη και μυϊκή ενδυνάμωση, ενώ σε συνδυασμό με ισορροπημένη διατροφή βοηθά στην προσπάθεια απώλειας κιλών, βελτιώνει τη σταθερότητα του σώματος ενισχύοντας τον κορμό, ενώ προστατεύονται οι ορθώσεις καθώς δεν καταπονούνται.</p>


                        <p>Κάποια από τα πολλά πλεονεκτήματα του <strong>TRX</strong> είναι:</p>
                        <ul>
                            <li>Γρήγορη και αποδοτική άσκηση για όλο το σώμα</li>
                            <li>Βελτίωση ισορροπίας και νευρομυϊκού συστήματος</li>
                            <li>Αυξάνει την μυική αντοχή</li>
                            <li>Εκγύμναση κορμού σε κάθε κίνηση</li>
                        </ul>

                    </Panel>

                    <Panel className='info-panel col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <Slider {...sliderSettings} className='place-slide pics-slide'>
                            <div className='slide-div'><img className='slide-img' src='images/trx/2.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/trx/4.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/trx/5.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/trx/6.jpg' role='presentation' /></div>
                        </Slider>
                    </Panel>

                    <div className='alert note' role='alert'>Το γεγονός ότι κατά την διάρκεια των ασκήσεων βρίσκεστε ουσιαστικά στον αέρα και κρατιέστε μόνο από τον ιμάντα, έχει τα μέγιστα οφέλη στην δύναμη, την ισορροπία και την μυϊκή υπερτροφία.</div>
                </div>
            </div>
        );
    }
}

export default Trx;
