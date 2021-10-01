import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './Meal.css'

const Meal = (props) => {
    const {idMeal,strMeal, strCategory, strMealThumb} = props.meal;
    const history = useHistory();
    const viewHandler = () =>{
        history.push(`/meal/${idMeal}`)
    }
    return (
            <Card id="card" sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={strMeal}
                    subheader={strCategory}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={strMealThumb}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                <Button className="button" onClick={viewHandler} variant="contained">View Meal</Button>
                </CardContent>
            </Card>
    );
};

export default Meal;