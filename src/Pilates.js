import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Slider from 'react-slick';

class Pilates extends Component {
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
                    <Panel header='Pilates' className='pilates-panel about-panel col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <p>Το <strong>Pilates</strong> μας βοηθάει να συνειδητοποιήσουμε πώς πρέπει να στηρίξουμε το σώμα μας και συγχρόνως μας δυναμώνει μυϊκά. Με αυτό τον τρόπο, ελευθερώνονται οι αρθρώσεις, τα άκρα, η σπονδυλική στήλη. Οι μύες επιμηκύνονται, το σώμα μακραίνει και φαίνεται πιο αδύνατο και σφιχτό. Και, πράγματι, όλα αυτά συμβαίνουν σχετικά γρήγορα.</p>

                        <p>Με το <strong>Pilates</strong> μπορείτε να επιτύχετε:</p>
                        <ul>
                            <li>Βελτίωση της στάσης και της ευθυγράμμισης του σώματος</li>
                            <li>Ενδυνάμωση κοιλιακών και πλάτης</li>
                            <li>Βελτίωση αντοχής</li>
                            <li>Μειώνει τις χρόνιες μυϊκές διαταραχές και τους πόνους στη μέση</li>
                            <li>Απαλλαγή από χρόνια προβλήματα της σπονδυλικής στήλης</li>
                            <li>Διάσπαση λίπους σε γλουτούς και πόδια.</li>
                            <li>Μειώνει τη κατάθλιψη και το άγχος</li>
                        </ul>

                    </Panel>

                    <Panel className='info-panel col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <Slider {...sliderSettings} className='place-slide pics-slide'>
                            <div className='slide-div'><img className='slide-img' src='/static/images/pilates/1.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/pilates/4.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/pilates/2.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='/static/images/pilates/3.jpg' role='presentation' /></div>
                        </Slider>
                    </Panel>
                </div>
            </div>
        );
    }
}

export default Pilates;
