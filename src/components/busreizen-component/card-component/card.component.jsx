import React from 'react';
import { Link } from 'react-router-dom';

import './card.component.styles.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card-parent">
                <img className="img" src={this.props.image} alt={this.props.alt} />
                <div className="span-div"><span className="span-caption">{this.props.caption}</span></div>
                <Link to={"/busreizen/" + this.props.param}>MEER INFORMATIE</Link>
            </div>
        );
    }
}

export default Card;