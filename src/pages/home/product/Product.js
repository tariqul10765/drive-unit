import { Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    container: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
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
        backgroundColor: 'black',
        opacity: '0.7',

        "& p": {
            width: '90%',
            margin: '0',
        },
        "& h4": {
            margin: '0',
            color: '#94B3FD'
        }
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

        "& h5": {
            marginLeft: '10px',
        },
        "& a": {
            marginRight: '20px',
        }
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
    const { _id, img, title, price, description } = item;
    return (
        <Grid item md={4} className={classes.container}>
            <img width="100%" height='290px' src={img} alt={title} />
            <Box className={classes.details}>
                <h4>${price}</h4>
                <p>{description.slice(0, 100)} ...</p>
                <Button variant='text' className={classes.detailsBtn}>{`View More =>>`}</Button>
            </Box>
            <Box className={classes.purchase}>
                <h5>{title}</h5>
                <Button variant='text'>
                    <NavLink to={`/purchase/${_id}`}>PURCHASE</NavLink>
                </Button>
            </Box>
        </Grid>
    );
};

export default Product;