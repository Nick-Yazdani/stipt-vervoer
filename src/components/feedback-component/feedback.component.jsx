import React from 'react'
import FeedbackCard from '../feedback-component/feedback-card-component/feedback-card.component';

import './feedback.component.styles.css'

class FeedbackContainer extends React.Component {
    state = {
        feedback: ''
    }
    componentDidMount = async () => {
        const response = await fetch("http://localhost:3001/feedback")
        const parsedResponse = await response.json();
        console.log(parsedResponse)
        this.setState({feedback: parsedResponse})
    }
    render() { 
        return (
            <div className="fb-card-container">
                {this.state.feedback ? this.state.feedback.map(item => {
                   return <FeedbackCard key={item.id} name={item.name} comments={item.comments} />
                }): null}
            </div>
        );
    }
}
 
export default FeedbackContainer;