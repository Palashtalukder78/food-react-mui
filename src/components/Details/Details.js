import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './Details.css'
const Details = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal;
    const history = useHistory();
    const backHandler = () => {
        history.push('/shop')
    }
    return (
        <>
            <div div className="detail" >
                <div>
                    <img src={strMealThumb} alt="" />
                </div>
                <div className="content">
                    <h1>{strMeal}</h1>
                    <p>{strInstructions}</p>
                    <Button onClick={backHandler} variant="contained">Go Shop</Button>
                </div>
            </div >
        </>
    );
};

export default Details;