import { CircularProgress, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../product/Product';

const useStyles = makeStyles({
    productsTitle: {
        marginBottom: '10px !important',
        fontSize: '200%'
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
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/products/product-list`;
        fetch(url)
            .then(res => res.json())
            .then(json => setProducts(json.data.slice(0, 6)));
    }, []);


    return (
        <div>

            <Box className={classes.serviceContainer}>
                <h1 className={classes.productsTitle}>MODELS</h1>
                {
                    products.length
                        ?
                        <Grid container>
                            {
                                products.map((item, index) => <Product item={item} key={index}></Product>)
                            }
                        </Grid>
                        :
                        <CircularProgress />
                }
            </Box>
        </div>
    );
};

export default Products;