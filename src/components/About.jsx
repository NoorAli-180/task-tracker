import React from 'react';

import { Link } from 'react-router-dom';

export const About = (props) => {
    return (
        <div className="about_page">
            <h4>version 1.0.0</h4>
            <Link to = '/'>Go Back</Link>
        </div>
    )
}
