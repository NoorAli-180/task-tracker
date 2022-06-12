import React from 'react';

import '../index.css';

export const Button = ({color}) => {
    return (
        <button className="btn" style = {{background: color}}
        onClick = {()=> console.log('click')}>
            Add
        </button>
    )
}
