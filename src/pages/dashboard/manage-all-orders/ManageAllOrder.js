import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import ManageOrder from '../manage-order/ManageOrder';

export default function ManageAllOrder() {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/order/order-list`;

        fetch(url)
            .then(res => res.json())
            .then(json => setOrders(json.data))
    }, [user.email]);

    const handleDeleteOrder = (orderId) => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/order/delete-order/${orderId}`;

        const updateOrderList = orders.filter(order => order._id !== orderId);
        setOrders(updateOrderList);

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    return (
        <TableContainer component={Paper} sx={{ overflowX: 'scroll', maxWidth: '90vw' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="left">User</TableCell>
                        <TableCell align="left">Item</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Buying Date</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => <ManageOrder
                        order={order}
                        handleDeleteOrder={handleDeleteOrder}
                    ></ManageOrder>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
