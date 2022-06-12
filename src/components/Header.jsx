import React from 'react';

import '../index.css';
import {Button} from './Button.jsx';

export const Header = (props) => {
    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button color = 'green'/>
        </div>
    );
}
