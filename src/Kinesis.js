import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Slider from 'react-slick';

class Kinesis extends Component {
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
                    <Panel header='KINESIS' className='kinesis-panel about-panel col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <p>Η επιτομή στην λειτουργική προπόνηση, τρισδιάστατη αντίσταση σε όλες τις ασκήσεις. Αυτό είναι το <strong>Kinesis</strong>, ένας εξοπλισμός που σας γυρίζει στην προέλευση της ανθρώπινης κίνησης. Με το <strong>Kinesis</strong> ζήστε την εμπειρία της απόλυτης ελευθερίας κινήσεων και αναπτύξτε τις τέσσερις θεμελιώδεις φυσικές ικανότητες: <strong>αντοχή, ισορροπία, δύναμη και ευελιξία</strong>.</p>

                        <p>Το <strong>Kinesis</strong> παρέχει μια μοναδική προπονητική εμπειρία που αποκαθιστά τη σωστή ισορροπία μεταξύ του μυαλού και σώματος και έτσι σας βοηθά να βελτιώσετε την ποιότητα της ζωής σας.</p>

                        <p>Το <strong>Kinesis</strong> είναι η ιδανική λύση για μια μοναδική και εξατομικευμένη προπόνηση. Όντας τόσο ευέλικτο, μπορεί να κάνει τόσο κλασσικές όσο και συνδυασμένες κινήσεις.<br />Εκατοντάδες επιλογές για ασκήσεις και τεχνικές που αλλάζουν τα δεδομένα στην προπονητική.</p>

                        <p>Με το <strong>Kinesis</strong> μπορείτε να:</p>
                        <ul>
                            <li>Αυξήσετε μυϊκό τόνο και μάζα</li>
                            <li>Ενεργοποιήσετε τον μεταβολισμό</li>
                            <li>Διαμορφώσετε σύσφιξη του σώματος σας</li>
                            <li>Βελτιώσετε ισορροπία αποφεύγοντας πιθανούς τραυματισμούς.</li>
                        </ul>

                    </Panel>

                    <Panel className='info-panel col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <Slider {...sliderSettings} className='place-slide pics-slide'>
                            <div className='slide-div'><img className='slide-img' src='images/kinesis/1.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/kinesis/2.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/kinesis/3.jpg' role='presentation' /></div>
                            <div className='slide-div'><img className='slide-img' src='images/kinesis/4.jpg' role='presentation' /></div>
                        </Slider>
                    </Panel>

                    <div className='alert note' role='alert'>Με το Kinesis μπορείτε να προπονήσετε όλους τους μύες, αλλάζοντας απλά τη στάση του σώματός σας κατά την διάρκεια της άσκησης, έτσι ώστε να μπορείτε να προβείτε άμεσα σε διορθωτικές κινήσεις.</div>
                </div>
            </div>
        );
    }
}

export default Kinesis;
