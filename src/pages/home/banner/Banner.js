import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
    root: {
        backgroundImage: `url('https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-6266ffbeaed30a6662f9658b79a27ed7.webp')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',

        width: '100%',
        minHeight: '600px',
        color: 'white',
    },
    bannerTitle: {
        paddingTop: '50px',
        "& h1": {
            fontSize: '300%',
        },
        "& h2": {
            fontSize: '20px',
            fontWeight: '500',
            letterSpacing: '2px'
        },
    }
});

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box sx={{ width: '90%', margin: '0 auto', textAlign: 'left' }}>
                <Box className={classes.bannerTitle}>
                    <h1>
                        BUGATTI CHIRON
                        <br />
                        SUPER SPORT
                    </h1>
                    <h2>
                        THE ULTIMATE GRAND TOURISME, <br />
                        DELIVERING BRUTAL PERFORMANCE <br />
                        IN TOTAL COMFORT
                    </h2>
                </Box>
                <Button variant="outlined" color="secondary">DISCOVER MORE</Button>
            </Box>
        </div >
    );
};

export default Banner;