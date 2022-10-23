import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import './categories.css'
export function Categories() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("Seafood");
    const [meals, setMeals] = useState([])
    const [meal, setMeal] = useState([]);
    const [id, setId] = useState();
    const [component, setComponent] = useState("meals");
    const getcategories = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            .then(res => res.json())
            .then(data => {
                setCategories(data.meals);
                console.log(data.meals)
            })
    }
    useEffect(() => { getcategories() }
        , [])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => res.json())
            .then((data) => {
                setMeals(data.meals)
                console.log(data.meals)
            })
    }, [category])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then((data) => {
                setMeal(data.meals[0])
                console.log(data.meals)
            })
    }, [id])
    const render = () => {
        switch (component) {
            case ("meals"):
                return (
                    <div className='maincmpt'>
                        {meals.map((meal) => {
                            return (

                                <div className='mealcard'>
                                    <img src={meal.strMealThumb} alt="" />
                                    <h3>{meal.strMeal} {meal.idMeal}</h3>
                                    <button onClick={() => {
                                        setComponent("recipe")
                                        setId(meal.idMeal)
                                    }}>Get Recipe</button>
                                </div>

                            )
                        })}
                    </div>
                )
            case ("recipe"):
                return (
                    <div className='mealrecipe'>
                        <img src={meal.strMealThumb} alt="" className='recipeimg' />
                        <p>
                            <h3>{meal.strMeal}</h3>
                            <p>
                                <h3>Instructions </h3>
                                {meal.strInstructions}
                            </p>
                        </p>
                    </div>
                )
        }
    }


    return (

        < div >
            <Navbar />
            <div className='mealctr'>
                <div className='cat'>
                    {categories.map((item) => {
                        return (

                            <button onClick={() => {
                                setCategory(item.strCategory);
                                setComponent("meals")
                            }}>{item.strCategory}</button>

                        )
                    })}
                </div>
                <div className='mealcmpnt'>
                    <h2>{category} meals</h2>
                    {render()}
                </div>

            </div>

        </div >
    )
}

