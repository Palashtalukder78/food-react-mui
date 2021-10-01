import { LinearProgress } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Details from '../Details/Details';

const MealDetails = () => {
    const { mealId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.meals))

    }, [mealId]);

    return (
        <>
            {
                details.length === 0 ?
                    <LinearProgress />
                    :
                    details.map(meal => <Details
                        meal={meal}
                    ></Details>)
            }
        </>
    );
};

export default MealDetails;