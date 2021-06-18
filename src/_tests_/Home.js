import React from 'react'
import { Link } from 'react-router-dom'




export default function Home() {
    return (
        <div className='main-container'>
            <h1>Welcome to Vinny's Pizza</h1>
            <div>
                <Link id='order-pizza' to="/pizza" >Let's get started!</Link>
            </div>
        </div>
    )
}