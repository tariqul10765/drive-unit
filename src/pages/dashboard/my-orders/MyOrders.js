import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import useAuth from '../../../hooks/useAuth';

export default function MyOrders() {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/order/get-single-user-order/${user.email}`;
        console.log(url);

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
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="right">Item</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Buying Date</TableCell>
                        <TableCell align="right">Actions</TableCell>
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
                            <TableCell align="right">{order.title}</TableCell>
                            <TableCell align="right">{order.price}</TableCell>
                            <TableCell align="right">{order._id}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => handleDeleteOrder(order._id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
