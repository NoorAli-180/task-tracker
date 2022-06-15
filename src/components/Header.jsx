import React from 'react';
import { useLocation } from 'react-router-dom';

import '../index.css';
import {Button} from './Button.jsx';

export const Header = ({ toggleForm, formOpened }) => {
    const location = useLocation();
    return (
        <div className="header">
            <h1>Task Tracker</h1>
            {
               location.pathname === '/' && <Button 
                color = {formOpened ? 'red' : 'green'} 
                toggleForm = {toggleForm}
                formOpened = {formOpened}/>
            }
        </div>
    );
}
