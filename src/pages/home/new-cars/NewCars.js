import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles({
    container: {
        marginTop: '50px',
        width: '80%',
        margin: '0 auto',
        "& img": {
            width: '100%',
        }
    },
    title: {
        margin: '20px 0',
        fontSize: '200%'
    }
})

const NewCars = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>NEW COLLECTIONS</h1>
            <Grid container>
                <Grid item md={4}>
                    <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8d8feca63aa2e5ccc4ba9ec1de73f6e5.webp" alt="" />
                </Grid>
                <Grid item md={4}>
                    <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8d8feca63aa2e5ccc4ba9ec1de73f6e5.webp" alt="" />
                </Grid>
                <Grid item md={4}>
                    <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8d8feca63aa2e5ccc4ba9ec1de73f6e5.webp" alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default NewCars;