import React from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Avatar, Grid, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    container: {
        // padding: '100px'
        justifyContent: 'center',
    },
    clientImg: {
        textAlign: 'center',
    },
    avater: {
        margin: '0 auto'
    },
    message: {
        textAlign: 'center',
        backgroundColor: '#EEEEEE',
        width: '100%',
        height: '100%',
        padding: '15px',
    },
    left__arrow__icon: {
        marginLeft: '-35px',
        color: '#EEEEEE',
        fontSize: '30px',
    }
})

const Review = ({ data }) => {
    const { userName, userImg, rating, review } = data;
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                <Grid item md={2} className={classes.clientImg}>
                    {
                        userImg
                            ?
                            <Avatar
                                className={classes.avater}
                                alt="Remy Sharp"
                                src={userImg}
                                sx={{ width: 56, height: 56 }}
                            />
                            :
                            <Avatar
                                className={classes.avater}
                                alt="Remy Sharp"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                                sx={{ width: 56, height: 56 }}
                            />
                    }
                    <h5>{userName}</h5>
                </Grid>
                <Grid item md={10} className={classes.message}>
                    <ArrowLeftIcon className={classes.left__arrow__icon} />
                    <Rating name="read-only" value={rating} readOnly />
                    <p>{review}</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Review;