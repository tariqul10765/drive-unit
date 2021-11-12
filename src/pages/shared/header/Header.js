import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    burgerIcon: {
        "@media (min-width: 768px)": {
            display: 'none',
        }
    },
    navbar: {
        "@media (max-width: 767px)": {
            display: 'none',
        }
    }
})

const Header = () => {
    const classes = useStyle();
    const { user, userSignOut } = useAuth();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState(!state);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {
                    user?.email
                    &&
                    <NavLink to='/dashboard'>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </NavLink>
                }
                <NavLink to='/explore-products'>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="EXPLORE PRODUCTS" />
                    </ListItem>
                </NavLink>

                {
                    user?.email
                        ?
                        <ListItem button onClick={userSignOut}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sign Out" />
                        </ListItem>
                        :
                        <NavLink to='/login'>
                            <ListItem button onClick={userSignOut}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Log in" />
                            </ListItem>
                        </NavLink>
                }
            </List>
        </Box>
    );

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#171E2A' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={classes.burgerIcon}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={state} onClose={toggleDrawer(false)}>
                            {list("left")}
                        </Drawer>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink to='/'>DRIVE UNIT</NavLink>
                        </Typography>
                        <Box className={classes.navbar}>
                            {
                                user?.email
                                &&
                                <Button color='inherit'>
                                    <NavLink to='/dashboard'>Dashboard</NavLink>
                                </Button>
                            }
                            <Button color="inherit">
                                <NavLink to='/explore-products'>EXPLORE PRODUCTS</NavLink>
                            </Button>
                            {
                                user?.email
                                    ?
                                    <Button color='inherit' onClick={userSignOut}>SignOut</Button>
                                    :
                                    <Button color='inherit'>
                                        <NavLink to='/login'>Login</NavLink>
                                    </Button>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;