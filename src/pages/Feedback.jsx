import React from 'react';
import Helmet from 'react-helmet';

import FeedbackForm from '../components/feedback-form-component/feedback-form-component';
import FeedbackContainer from '../components/feedback-component/feedback.component';

class Feedback extends React.Component {
    render() {
        return (
        <React.Fragment>
            <Helmet><title>{this.props.title}</title></Helmet>
            <FeedbackForm />
            <FeedbackContainer />
        </React.Fragment>
        )
    }
}

export default Feedback;