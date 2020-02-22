import React from 'react';
import Helmet from 'react-helmet';

import FeedbackForm from '../components/feedback-form-component/feedback-form-component';
import FeedbackContainer from '../components/feedback-component/feedback.component';
import './Feedback.styles.css'

class Feedback extends React.Component {
    render() {
        return (
        <React.Fragment>
            <Helmet>
                <title>{this.props.title}</title>
                <meta name="description"
                      content="Geef feedback over uw ervaringen en die van anderen met Stipt Vervoer"></meta>
            </Helmet>
            <FeedbackForm className="fb-form" />
            <FeedbackContainer />
        </React.Fragment>
        )
    }
}

export default Feedback;