import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
    productsTitle: {
        marginBottom: '10px !important',
    },
    serviceContainer: {
        marginTop: '80px !important',
        textAlign: 'left',
        width: '80%',
        margin: '0 auto',
    }
})

const Products = () => {
    const classes = useStyles();
    return (
        <div>

            <Box className={classes.serviceContainer}>
                <Typography variant='h2' className={classes.productsTitle}>MODELS</Typography>
                <Grid container spacing={2}>
                    {
                        itemData.map((item, index) => {
                            return (
                                <Grid item xs={4}>
                                    <img width='100%' src={item.img} alt={item.title} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </div>
    );
};

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    }, {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
];

export default Products;