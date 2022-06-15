import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = (props) => {
    return (
        <footer className = "footer">
            <h4>Copyright &copy; NoorAli-2022</h4>
            <Link to = '/about'>About</Link>
        </footer>
    )
}
