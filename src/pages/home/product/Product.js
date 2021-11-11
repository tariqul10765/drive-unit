import { Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    container: {
        padding: '0 5px',
        position: 'relative',
        width: '100%',
        "&:hover": {
            "& $details": {
                display: 'flex',
            }
        }
    },
    details: {
        display: 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        color: 'white',
        backgroundColor: 'gray',
        opacity: '0.5'
    },
    purchase: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0',
        backgroundColor: '#1B1D23',
        color: 'white',
        width: '100%',
        height: '35px',
    },
    detailsBtn: {
        margin: '0',
        cursor: 'pointer',
        position: 'absolute',
        bottom: '35px',
        backgroundColor: 'black',
        width: '100%',
        textAlign: 'center',
    }
})

const Product = ({ item }) => {
    const classes = useStyle();
    const { img, title } = item;
    return (
        <Grid item md={4} className={classes.container}>
            <img width="100%" src={img} alt={title} />
            <Box className={classes.details}>
                <p>{title}</p>
                <p className={classes.detailsBtn}>View Details</p>
            </Box>
            <Box className={classes.purchase}>
                <h5>CONCEPT CAR</h5>
                <Button variant='text'>
                    <NavLink to={`/purchase/${title}`}>PURCHASE</NavLink>
                </Button>
            </Box>
        </Grid>
    );
};

export default Product;