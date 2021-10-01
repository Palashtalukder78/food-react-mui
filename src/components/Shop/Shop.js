import { CircularProgress } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShopItem from '../ShopItem/ShopItem';
import './Shop.css';

const Shop = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    const handleSearch = event => {
        const searchText = event.target.value;
        setSearchText(searchText);
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    return (
        <div>
            <div className="fearchfield">
                <input onChange={handleSearch} type="text" className="search" placeholder="Search your Item" />
            </div>
            {
                meals.length === 0 ?
                    <div className="spinner">
                        <CircularProgress />
                    </div>
                    :
                    <div className="shop-item">
                        {
                            meals.map(meal => <ShopItem
                                key={meal.idMeal}
                                meal={meal}
                            ></ShopItem>)
                        }
                    </div>
            }

        </div>
    );
};

export default Shop;