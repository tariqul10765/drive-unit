import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import IconButton from '@mui/material/IconButton';
import useAuth from '../../../hooks/useAuth';

export default function ManageAllOrder() {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('');

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

    const handleShipped = (orderId) => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/order/update-order/${orderId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => setStatus('shipped'))
    }

    return (
        <TableContainer component={Paper}>
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
                    {orders.map((order) => (
                        <TableRow
                            key={order.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <img src={order.img} alt={order.title} width="50px" />
                            </TableCell>
                            <TableCell align="left">{order.email}</TableCell>
                            <TableCell align="left">{order.title}</TableCell>
                            <TableCell align="left">{order.price}</TableCell>
                            <TableCell align="left">{order._id}</TableCell>
                            <TableCell align="left">{order.status}</TableCell>
                            <TableCell align="left">
                                <IconButton onClick={() => handleDeleteOrder(order._id)}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton onClick={() => handleShipped(order._id)}>
                                    <CheckCircleOutlineIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
