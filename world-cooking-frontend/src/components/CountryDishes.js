import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Dish from './Dish';

const dishes = [
    {
        id: 1,
        name: 'Borsh',
        img: 'https://vilkin.pro/wp-content/uploads/2018/12/borsh-s-kuricei-770x513.jpg',
        recipe: 'lorem*5',
        ingredients: 'lorem*5',
        servings: 10,
        country: 'Ukraine',
        countryImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Ukraine_%28pantone_colors%29.svg/2880px-Flag_of_Ukraine_%28pantone_colors%29.svg.png',
    },
    {
        id: 2,
        name: 'Salo',
        img: 'https://img.povar.ru/main/2b/fe/37/e6/salo_zasolennoe-627721.jpg',
        recipe: 'lorem*5',
        ingredients: 'lorem*5',
        servings: 10,
        country: 'Ukraine',
    },
    {
        id: 3,
        name: 'Papushki',
        img: 'https://www.koolinar.ru/all_image/recipes/156/156984/recipe_839e76b1-854a-422c-a830-f48ff153972b_w450.jpg',
        recipe: 'lorem*5',
        ingredients: 'lorem*5',
        servings: 10,
        country: 'Ukraine',
    },
];

const DishesList = (
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
                    <CardMedia
                        component="img"
                        image={dishes[0].countryImg}
                        alt={`${dishes[0].country}`}
                        id={'CardMedia'}
                        sx={{pr: 3}}
                    />
                    Ukraine
                </Typography>
            </Container>
        </Box>
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {dishes.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Link
                            color="inherit"
                            href={window.location + card.name.toLowerCase()}
                            underline={'none'}
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        pt: '20%',
                                    }}
                                    image={card.img}
                                    alt={`${card.name}`}
                                />
                                <CardContent sx={{flexGrow: 1}}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        textAlign={'center'}
                                    >
                                        {card.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
);

function CountryDishes() {
    return <Dish />;
    // DishesList
}

export default CountryDishes;
