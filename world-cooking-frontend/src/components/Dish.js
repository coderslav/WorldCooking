import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const dish =
    {
        id: 1,
        name: 'Borsh',
        img: 'https://vilkin.pro/wp-content/uploads/2018/12/borsh-s-kuricei-770x513.jpg',
        recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae blanditiis deserunt\n' +
            '                    dolores eius eligendi esse fugiat ipsa iusto labore magni quam quis quo quos repellat sapiente sequi\n' +
            '                    voluptas, voluptates!',
        ingredients: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae blanditiis deserunt\n' +
            '                    dolores eius eligendi esse fugiat ipsa iusto labore magni quam quis quo quos repellat sapiente sequi\n' +
            '                    voluptas, voluptates!',
        servings: 10,
        country: 'Ukraine'
    }

function Dish() {
    return (
        <>
            <Box
                sx={{
                    pt: 5,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h1"
                        align="center"
                        color="text.primary"
                        fontWeight="normal"
                        gutterBottom
                    >
                        {dish.name}
                    </Typography>
                    <Typography variant="h4" align="center" sx={{pb: 2}}>Ingredients
                        ({`${dish.servings} servings`}):</Typography>
                    <Typography variant="h6" align="justify" color="text.secondary" paragraph>
                        {dish.ingredients}
                    </Typography>
                </Container>
            </Box>
            <Container sx={{py: 5}} maxWidth="lg">
                <Grid>
                    <Grid item key={dish.id} md={12}>
                        <Card
                            sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                        >
                            <CardMedia
                                component="img"
                                image={dish.img}
                                alt={`${dish.name}`}
                            />
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography gutterBottom variant="h5" component="h2" textAlign={'center'}>
                                    {dish.recipe}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Dish;