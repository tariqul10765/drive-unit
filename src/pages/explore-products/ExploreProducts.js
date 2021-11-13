import { CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../home/product/Product';

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/products/product-list`;
        fetch(url)
            .then(res => res.json())
            .then(json => setProducts(json.data))
    }, []);
    return (
        <div>
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
        </div>
    );
};

export default ExploreProducts;