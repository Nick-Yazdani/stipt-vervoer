import React from 'react';

import './form-input.component.styles.css';

const InputComponent = ({ name, text, type, value, handleChange, style }) => {
    return (
        <div className="form-control">
            <label htmlFor={name}>{text}</label>
            <input name={name} type={type} value={value} onChange={handleChange} style={style} />
        </div>
    )
}

export default InputComponent;