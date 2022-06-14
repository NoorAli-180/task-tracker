import React from 'react';

import '../index.css';
import {Button} from './Button.jsx';

export const Header = ({ toggleForm, formOpened }) => {
    return (
        <div className="header">
            <h1>Task Tracker</h1>
            <Button 
            color = {formOpened ? 'red' : 'green'} 
            toggleForm = {toggleForm}
            formOpened = {formOpened}/>
        </div>
    );
}
