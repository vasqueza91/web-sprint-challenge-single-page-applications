import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export default function Home() {
    return (
        <div className='main-container'>
            <h1>Welcome to Vinny's Pizza</h1>
            <div>
                <Link to="/pizzaform">Let's get started!</Link>
            </div>
        </div>
    )
}