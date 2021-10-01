import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './ShopItem.css'

const ShopItem = (props) => {
    const {idMeal, strMeal, strCategory, strMealThumb } = props.meal;
    const history = useHistory();
    const viewHandler = () =>{
        history.push(`meal/${idMeal}`);
    }
    return (
        <Card class="card" className="meal" sx={{ maxWidth: 345 }}>
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
                <Button onClick={viewHandler} className="button" variant="contained">View Meal</Button>
            </CardContent>
        </Card>
    );
};

export default ShopItem;