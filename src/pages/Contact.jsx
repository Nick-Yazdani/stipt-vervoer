import React from 'react';
import Helmet from 'react-helmet';

import ContactForm from '../components/contact-form-component/contact-form.component';
import './Contact.styles.css';

const Contact = ({ title }) => {
    return (
            <div className="contact">
                <Helmet>
                    <title>{title}</title>
                    <meta name="description"
                          content="Neem contact op met Stipt Vervoer. We proberen zo snel mogelijk op uw vragen te reageren."></meta>
                </Helmet>
                <ContactForm />
        </div>
    );
}

export default Contact;