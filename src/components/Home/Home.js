import { CircularProgress } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../Meal/Meal';
import './Home.css'
const Home = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <>
            <div id="background-img" />
            <h1 className="title">Shop</h1>
            {meals.length === 0 ?
                <div className="spinner">
                    <CircularProgress />
                </div>
            :
            <div className="meal-item">
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>
                    )
                }
            </div>
            }   
        </>
    );
};

export default Home;