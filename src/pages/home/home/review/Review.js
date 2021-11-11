import React from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Grid, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    container: {
        // padding: '100px'
    },
    clientImg: {
        textAlign: 'center',
        "& img": {
            margin: '0 auto'
        }
    },
    message: {
        backgroundColor: '#EEEEEE',
        height: '100%',
        padding: '15px',
    },
    left__arrow__icon: {
        marginLeft: '-35px',
        color: '#EEEEEE',
        fontSize: '30px',
    }
})

const Review = ({ review }) => {
    const { name, imgUrl, message } = review;
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Grid container spacing={2}>
                <Grid item md={2} className={classes.clientImg}>
                    <img src={imgUrl} alt={name} />
                    <h5>{name}</h5>
                </Grid>
                <Grid item md={10} className={classes.message}>
                    <ArrowLeftIcon className={classes.left__arrow__icon} />
                    <Rating name="read-only" value='3' readOnly />
                    <p>{message}</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Review;