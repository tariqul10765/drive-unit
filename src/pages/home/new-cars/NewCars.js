import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyle = makeStyles({
    container: {
        display: 'flex',
        "& img": {
            width: '100%',
        }
    }
})

const NewCars = () => {
    const classes = useStyle();
    return (
        <div>
            <Typography variant="h3">NEW COLLECTIONS</Typography>
            <Box className={classes.container}>
                <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8d8feca63aa2e5ccc4ba9ec1de73f6e5.webp" alt="" />
                <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8d8feca63aa2e5ccc4ba9ec1de73f6e5.webp" alt="" />
                <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8d8feca63aa2e5ccc4ba9ec1de73f6e5.webp" alt="" />
            </Box>
        </div>
    );
};

export default NewCars;