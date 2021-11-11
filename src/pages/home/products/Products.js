import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Product from '../product/Product';

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
                <Grid container>
                    {
                        itemData.map((item, index) => <Product item={item} key={index}></Product>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

const itemData = [
    {
        img: 'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-ddbedf3cbd9a8a54019cb52035c97837.webp',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-a4b8659aca1db6d7c159ff712a57f0d6.webp',
        title: 'Burger',
    },
    {
        img: 'https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8d8feca63aa2e5ccc4ba9ec1de73f6e5.webp',
        title: 'Camera',
    },
    {
        img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2020/11_18_sto_lancio/Huracan_STO.png',
        title: 'Coffee',
        cols: 2,
    }, {
        img: 'https://www.topgear.com/sites/default/files/images/news-article/carousel/2018/11/4c16571ee0d81e04b092beabd12d56e6/526140.jpg',
        title: 'Hats',
        cols: 2,
    },
];

export default Products;