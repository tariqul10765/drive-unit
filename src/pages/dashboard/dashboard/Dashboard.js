import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Switch, useRouteMatch } from 'react-router';
import MyOrders from '../my-orders/MyOrders';
import Pay from '../pay/Pay';
import { NavLink } from 'react-router-dom';
import Review from '../review/Review';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../make-admin/MakeAdmin';
import AddProduct from '../add-product/AddProduct';
import ManageAllOrder from '../manage-all-orders/ManageAllOrder';
import ManageProduct from '../manage-products/ManageProducts';
import AdminRoute from '../../../admin-route/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    let { path, url } = useRouteMatch();
    const { admin, userSignOut } = useAuth();
    console.log(admin);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {
                    !admin &&
                    <>
                        <NavLink
                            to={`${url}/my-orders`}
                            style={isActive => ({
                                color: isActive ? "green" : "blue"
                            })}
                        >
                            <ListItem button onClick={handleDrawerToggle}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="My Orders" />
                            </ListItem>
                        </NavLink>
                        <NavLink
                            to={`${url}/pay`}
                            style={isActive => ({
                                color: isActive ? "green" : "blue",
                            })}
                        >
                            <ListItem button onClick={handleDrawerToggle}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Pay" />
                            </ListItem>
                        </NavLink>
                        <NavLink
                            to={`${url}/review`}
                            style={isActive => ({
                                color: isActive ? "green" : "blue",
                            })}
                        >
                            <ListItem button onClick={handleDrawerToggle}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Review" />
                            </ListItem>
                        </NavLink>
                    </>
                }
                {
                    admin &&
                    <>
                        <NavLink
                            to={`${url}/manage-all-order`}
                            style={isActive => ({
                                color: isActive ? "green" : "blue",
                            })}
                        >
                            <ListItem button onClick={handleDrawerToggle}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Manage All Orders" />
                            </ListItem>
                        </NavLink>
                        <NavLink
                            to={`${url}/add-product`}
                            style={isActive => ({
                                color: isActive ? "green" : "blue",
                            })}
                        >
                            <ListItem button onClick={handleDrawerToggle}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add a product" />
                            </ListItem>
                        </NavLink>
                        <NavLink
                            to={`${url}/make-admin`}
                            style={isActive => ({
                                color: isActive ? "green" : "blue",
                            })}
                        >
                            <ListItem button onClick={handleDrawerToggle}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Make Admin" />
                            </ListItem>
                        </NavLink>
                        <NavLink
                            to={`${url}/manage-product`}
                            style={isActive => ({
                                color: isActive ? "green" : "blue",
                            })}
                        >
                            <ListItem button onClick={handleDrawerToggle}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Manage Products" />
                            </ListItem>
                        </NavLink>
                    </>
                }
                <ListItem button onClick={userSignOut}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <NavLink to='/'>DRIVE UNIT</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    {
                        admin
                            ?
                            <Route exact path={path}>
                                <ManageAllOrder></ManageAllOrder>
                            </Route>
                            :
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>
                    }
                    <Route exact path={`${path}/my-orders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute exact path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/add-product`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manage-all-order`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manage-product`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                    {/* <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute> */}
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
