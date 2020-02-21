import React from 'react';
import { Link } from 'react-router-dom';

import './card.component.styles.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card-parent">
                {
                this.props.imagename !== 'none' 
                ? <img className="img" src="https://i.ibb.co/9pGLBjQ/lukas-souza-b-AFWnh-GAvxk-unsplash-min.jpg" alt="lukas-souza-b-AFWnh-GAvxk-unsplash-min" border="0" />
                : <img className="img" src={this.props.image} alt={this.props.alt} />}
                <div className="span-div"><span className="span-caption">{this.props.caption}</span></div>
                <Link to={"/busreizen/" + this.props.param}>MEER INFORMATIE</Link>
            </div>
        );
    }
}

export default Card;