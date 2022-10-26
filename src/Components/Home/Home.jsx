import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import './Home.css'
export function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className='homectr'>

                {/* <img className='childimg' src='https://media.istockphoto.com/vectors/cooking-lady-vector-id139756243?k=20&m=139756243&s=170667a&w=0&h=R0L8AABWFBU7VIdSgM1vK6iFrw4xlOkBtGzWtvBf2gE=' /> */}

                <div className='childctr'>
                    <h1 className='title'>RecipeHub</h1>
                    <p className='caption'>Try out and taste your favourite recipes</p>
                    <button className='getstarted' onClick={() => navigate('/categories')}>Get Started</button>
                </div>
                <img className='childimg' src='https://img.freepik.com/free-vector/recipe-book-concept-illustration_114360-7481.jpg?w=2000' />
            </div>
        </div>
    )
}


