import React from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import './card.component.styles.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card-parent">
                <img className="img" src={this.props.image} alt={this.props.alt} />
                <div className="span-div"><span className="span-caption">{this.props.caption}</span></div>
                
                <Popup trigger={<button className="btn-2">MEER INFORMATIE</button>} modal closeOnDocumentClick 
                contentStyle={{width: "80%", padding: "0"}}>
                    <div className="modal-content"><h3>{this.props.caption}</h3></div>
                    <ul className="modal-list">
                        <li><FontAwesomeIcon icon={faClock} size="xs" fixedWidth/><span>Reisduur: <span className="inner">{this.props.reisduur}</span> </span></li>
                        <li><FontAwesomeIcon icon={faLocationArrow} size="xs" fixedWidth/><span>Vervoer: <span className="inner">{this.props.vervoer}</span> </span></li>
                        <li><FontAwesomeIcon icon={faInfo} size="xs" fixedWidth/><span>Vakantietype: <span className="inner">{this.props.vakantietype}</span></span> </li>
                        <li><FontAwesomeIcon icon={faUsers} size="xs" fixedWidth/><span>Groepsgrootte: <span className="inner">{this.props.groepsgrootte}</span> </span></li>
                        <li id="price"><FontAwesomeIcon icon={faMapMarkerAlt} size="xs" fixedWidth/><span>Bestemming: <span className="inner">{this.props.bestemming}</span></span>                      <p className="inline">{this.props.reisduur} {this.props.location} van af {this.props.price} - EUR</p>
</li>
                    </ul>
                </Popup>
            </div>
        );
    }
}

export default Card;