import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
export function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <h1>RecipeHub</h1>
            <ul>
                <li className='homebtn' onClick={() => navigate('/')}>Home</li>
                <li className='catbtn' onClick={() => navigate('/categories')}>Categories</li>
            </ul>
        </div>
    )
}
