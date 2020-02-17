import React from 'react';
import Helmet from 'react-helmet';

import ContactForm from '../components/contact-form-component/contact-form.component';

const Contact = ({ title }) => {
    return (
        <React.Fragment>
            <Helmet><title>{title}</title></Helmet>
            <ContactForm />
        </React.Fragment>
    );
}

export default Contact;