import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import useAuth from '../../../hooks/useAuth';
import ConfirmationModal from '../confirmation-modal/ConfirmationModal';
import ManageProduct from './ManageProduct';

export default function ManageProducts() {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/products/product-list`;

        fetch(url)
            .then(res => res.json())
            .then(json => setProducts(json.data))
    }, [user.email]);

    const handleDeleteOrder = (productId) => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/products/delete-product/${productId}`;

        const updateOrderList = products.filter(order => order._id !== productId);
        setProducts(updateOrderList);

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer component={Paper} sx={{ maxHeight: '70vh', maxWidth: '100vw' }}>
                <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="left">Item</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.map(product => <ManageProduct
                                key={product._id}
                                product={product}
                                handleDeleteOrder={handleDeleteOrder}
                            ></ManageProduct>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
