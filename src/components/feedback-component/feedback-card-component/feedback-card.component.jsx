import React from 'react'
import './feedback-card.component.styles.css'

const FeedbackCard = ({ name, comments }) => {
    return (
        <div className="fb-cont">
            <h3>{name}</h3>
            <p>{comments}</p>
        </div>
     );
}
 
export default FeedbackCard;