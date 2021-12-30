import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import '../styles/GlobalStyles.css';
import CountryDishes from './CountryDishes';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {' Dishes. '}
            {'Powered by '}
            <Link color="inherit"
                  href="https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/album">
                Material-UI
            </Link>{' '}
        </Typography>
    );
}

const countries = [
    {
        id: 1,
        name: 'Ukraine',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Ukraine_%28pantone_colors%29.svg/2880px-Flag_of_Ukraine_%28pantone_colors%29.svg.png'
    },
    {
        id: 2,
        name: 'France',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_France_%281958–1976%29.svg/2880px-Flag_of_France_%281958–1976%29.svg.png'
    },
    {
        id: 3,
        name: 'Italy',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/2880px-Flag_of_Italy.svg.png'
    }
]

const Main = (
    <Container sx={{py: 8}} maxWidth="lg">
        <Grid container spacing={4}>
            {countries.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Link color="inherit" href={window.location + card.name.toLowerCase()} underline={'none'}>
                        <Card
                            sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    pt: '20%',
                                }}
                                image={card.img}
                                alt={`${card.name} flag`}
                            />
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography gutterBottom variant="h5" component="h2" textAlign={'center'}>
                                    {card.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    </Container>
)

const theme = createTheme();

export default function MainPage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="relative" id={'AppBar'}>
                <Link color="inherit" href="/" underline={'none'} id={'Link'}>
                    <Toolbar>
                        <RestaurantIcon sx={{mr: 2, fontSize: '5rem'}}/>
                        <Typography variant="h3" color="inherit" fontSize={'5rem'} fontWeight={'bold'} noWrap>
                            World Dishes
                        </Typography>
                    </Toolbar>
                </Link>
            </AppBar>
            <main>
                <CountryDishes/>
                {/*{Main}*/}
            </main>
            <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Nyam Nyam
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Bon appetit and Happy coding! :)
                </Typography>
                <Copyright/>
            </Box>
        </ThemeProvider>
    );
}