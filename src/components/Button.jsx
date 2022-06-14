import React from 'react';

import '../index.css';

export const Button = ({color, toggleForm, formOpened}) => {
    return (
        <button className="btn" 
            style = {{background: color}}
            onClick = {toggleForm}>
            {formOpened ? 'Close' : 'Add'}
        </button>
    );
}
