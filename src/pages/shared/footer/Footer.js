import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React from 'react';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    container: {
        marginTop: '100px',
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
    },
    iconContainer: {
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
    },
    extra: {
        "& ul": {
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
        },
        "& li": {
            listStyle: 'none',
            fontSize: '12px'
        }
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Box className={classes.iconContainer}>
                <FacebookOutlinedIcon />
                <TwitterIcon />
                <InstagramIcon />
                <PinterestIcon />
                <YouTubeIcon />
                <LinkedInIcon />
            </Box>
            <Typography variant="body2">© 2021 BUGATTI AUTOMOBILES S.A.S.</Typography>

            <Box className={classes.extra}>
                <ul>
                    <li>CONTACT</li>
                    <li>CREER</li>
                    <li>MEDIA</li>
                    <li>LEGAL NOTICE</li>
                    <li>UK MODERN SLAVERY ACT</li>
                    <li>CODE OF CONDUCT</li>
                    <li>DATA PROTECTION NOTICE</li>
                    <li>COOKIES SETTINGS</li>
                </ul>
            </Box>
        </div>
    );
};

export default Footer;