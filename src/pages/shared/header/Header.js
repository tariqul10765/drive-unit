import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#171E2A' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            DRIVE UNIT
                        </Typography>
                        <Button color="inherit">
                            <NavLink to='/explore-products'>EXPLORE PRODUCTS</NavLink>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;