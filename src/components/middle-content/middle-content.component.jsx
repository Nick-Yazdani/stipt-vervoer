import React from 'react';

import './middle-content.styles.css';

const MiddleContent = ({ headline, content }) => {
    return (
        <div className="h-block">
            <h3>{headline}</h3>
            <div className="p-block">
                {content.map(cont => {
                    return <p key={cont.slice(0, 6)}>{cont}</p>
                })}
            </div>
        </div>
    );
}

export default MiddleContent;