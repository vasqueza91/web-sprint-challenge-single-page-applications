import { Link } from 'react-router-dom'
import React from 'react';

export default function Nav() {
    return (
        <div className="header">
            <div className="navBar">
                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    );
};