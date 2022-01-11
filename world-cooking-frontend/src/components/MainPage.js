import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import '../styles/GlobalStyles.css';


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


export default function MainPage() {
    return (
        <Container sx={{py: 8}} maxWidth="lg">
            <Grid container spacing={4}>
                {countries.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Link color="inherit" href={window.location.origin + '/' + card.name.toLowerCase()}
                              underline={'none'}>
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
    );
}