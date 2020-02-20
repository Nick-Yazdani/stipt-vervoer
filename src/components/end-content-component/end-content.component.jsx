import React from 'react';
import { Link } from 'react-router-dom';
import './end-content.component.styles.css';

const EndContent = ({ backgroundImage, voor, waarom }) => {
    return (
        <div className="end-secondary" style={{ background: `url(${backgroundImage}) no-repeat center center/cover` }}>
            <div className="end-overlay">
                <div className="center-end">
                <div className="end-s1">
                    <h5>Voor Wie?</h5>
                    <ul>
                        {voor.map(item => {
                            return <li key={item.slice(0, 10)}>{item}</li>
                        })}   
                    </ul>
                </div>
                <div className="end-s1">
                    <h5>Waarom?</h5>
                    <ul>
                    {waarom.map(item => {
                            return <li key={item.slice(0, 10)}>{item}</li>
                        })}                     
                    </ul>
                </div>
                <div className="end-s1">
                    <h5>Aan het slag</h5>
                    <ul>
                        <li>Stuur uw wensen via email naar <a id="email" href="mailto:info@stiptvervoer.nl">info@stiptvervoer.nl</a> of gebruik het aanvraagformulier <Link style={{ color: "white" }} to="/contact">here</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default EndContent;