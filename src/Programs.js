import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Programs extends Component {
    render() {
        return (
            <div className='container about-container programs-container'>
                <div className='row'>
                    <Panel header='_ΤΑ ΠΡΟΓΡΑΜΜΑΤΑ ΜΑΣ' className='programs-panel about-panel col-md-12 col-lg-12'>
                    </Panel>

                    <Panel id='cross-training' header='Cross Training' className='info-panel col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <p><strong>Cross training</strong>, μεταφράζοντας κατά λέξη, διασταυρωμένη προπόνηση, καταλαβαίνουμε ότι πρόκειται για σύνθετη δραστηριότητα, η οποία μπορεί να περιλαμβάνει πολλές αερόβιες και αναερόβιες δραστηριότητες σε μια μόνο προπόνηση.<br />Το <strong>Cross training</strong> αφορά όλους, από αρχάριους, ασκούμενους έως και πολύ προχωρημένους αθλητές.</p>

                        <p>Οφέλη <strong>Cross Training:</strong></p>
                        <ul>
                            <li>Γυμνάζουμε ολόκληρο το σώμα επιλέγοντας τις κατάλληλες δραστηριότητες, μπορούμε να επιβαρύνουμε ανάλογα ολόκληρο το μυϊκό μας σύστημα.</li>
                            <li>Αποφεύγουμε τη ρουτίνα της προπόνησης, εναλλάσσοντας τον τύπο της άσκησης μέσα στην ίδια την προπόνηση.</li>
                            <li>Βρίσκουμε εύκολη εφαρμογή, ώστε η κάθε προπόνηση να είναι στα μέτρα του ασκούμενου.</li>
                            <li>Ενισχύουμε την απώλεια βάρους.</li>
                        </ul>
                    </Panel>

                    <Panel header='Functional Training' className='info-panel col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <p>Σαν λειτουργική προπόνηση ορίζεται το σύνολο των ασκήσεων που εκπαιδεύουν σε κινήσεις που είναι απαραίτητες για τη δραστηριότητα του ατόμου, σε συνδυασμό με προπονητικές παραμέτρους που εξυπηρετούν τις καθημερινές δραστηριότητες.</p>

                        <p>Οφέλη <strong>Functional Training:</strong></p>
                        <ul>
                            <li>Η λειτουργική προπόνηση μπορεί να οδηγήσει σε ανάπτυξη του μυϊκού συστήματος και της ιδιοδεκτικότητας.</li>
                            <li>Να αυξήσει την μυϊκή και ενδομυϊκή συναρμογή με αποτέλεσμα να προετοιμάσει καλύτερα το σώμα ώστε να αποφεύγονται οι τραυματισμοί και να βελτιώσει κατά πολύ την αθλητική απόδοση.</li>
                        </ul>
                    </Panel>

                    <Panel id='outdoors-training' header="Κατ' οίκον προπόνηση" className='info-panel col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <p>Στο <strong>Pure</strong> προτεραιότητά μας είναι η εξυπηρέτηση σας. Για αυτό το λόγο σας παρέχουμε την δυνατότητα για κατ' οίκον προπόνηση ή όπου αλλού θέλετε.</p>
                        <p>Επικοινωνήστε μαζί μας ώστε να σχεδιάσουμε την κατάλληλη προπόνηση για εσάς στον χώρο που επιθυμείτε.</p>
                    </Panel>

                    <Panel header="Άλλα προγράμματα" className='info-panel col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <ul>
                            <li>Group Training</li>
                            <li>Massage</li>
                            <li>Step Choreo</li>
                            <li>Zoumba</li>
                        </ul>
                    </Panel>

                    <div className='alert note' role='alert'><strong>Για περισσότερες πληροφορίες σχετικά με τα προγράμματα μας επικοινωνήστε μαζί μας.</strong></div>
                </div>
            </div>
        );
    }
}

export default Programs;
