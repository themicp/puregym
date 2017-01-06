import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Slider from 'react-slick';

class PowerPlate extends Component {
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
                    <Panel header=' ' className='power-plate-panel about-panel col-md-6 col-lg-6'>
                        <p>Το <strong>Power Plate</strong> έχει φέρει την επανάσταση στους τομείς της ευεξίας, της ομορφιάς και της αντιγήρανσης. Το μυστικό; Ταχύτητα και αποτελεσματικότητα, με το πάτημα μόνο ενός κουμπιού. Έτσι ενεργοποιείται η λειτουργία τρισδιάστατης δόνησης της πλατφόρμας <strong>Power Plate</strong>.</p>

                        <p>Το δεύτερο και σημαντικότερο μυστικό της επιτυχίας, είναι το γνωστικό επίπεδο του <strong>Personal Trainer</strong> που σας έχει αναλάβει.<br /> 
Έτσι, με την σωστή καθοδήγηση μπορείτε σε σύντομο χρονικό διάστημα, με ασφάλεια και σιγουριά να επιτύχετε:</p>

                            <ul>
                                <li>Ενδυνάμωση και μυϊκό τόνο</li>
                                <li>Αύξηση κυκλοφορίας του αίματος</li>
                                <li>Μείωση πόνων</li>
                                <li>Αποκατάσταση</li>
                                <li>Καταπολέμηση κυτταρίτιδας / χαλάρωσης</li>
                                <li>Μείωση λιπώδους ιστού.</li>
                            </ul>

                    </Panel>

                    <Panel className='info-panel col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                        <Slider {...sliderSettings} className='place-slide pics-slide'>
                            <div className='slide-div'><img className='slide-img' src='images/power_plate/1.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/power_plate/4.jpg' role='presentation' /></div>
                        </Slider>
                    </Panel>

                    <div className='alert note' role='alert'>
                        <p>Παράλληλα αν είστε αθλητής μπορείτε να επιτύχετε:</p>
                        <p><strong>Ενδυνάμωση των συμβατικών προπονήσεων και των ασκήσεων εκρηκτικής δύναμης</strong></p>
                        <p><strong>Επιτάχυνση των χρόνων αποκατάστασης και αναγέννησης</strong></p>
                        <p><strong>Δραματική αύξηση στην κινησιακή μάθηση και την μυϊκή ανοχή</strong></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PowerPlate;
