import React from 'react';

import './overlay.styles.css';

const Overlay = ({ title, caption }) => {
    return (
        <div className="overlay">
            <div className="big-text">
                <h1>{title}</h1>
            </div>
            <div className="smaller-text">
                {caption}
            </div>
        </div>
    );
}

export default Overlay;