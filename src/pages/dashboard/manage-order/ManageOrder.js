import { IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React, { useState } from 'react';
import ConfirmationModal from '../confirmation-modal/ConfirmationModal';

const ManageOrder = ({ order, handleDeleteOrder }) => {
    const { title, email, price, _id, status, img } = order;
    const [isShipped, setIsShipped] = useState(status);
    const [isOpen, setIsOpen] = useState(false);

    const handleShipped = (orderId) => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/order/update-order/${orderId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(setIsShipped('shipped'));
    }

    const handleConfirmation = (isConfirm) => {

        if (isConfirm) handleDeleteOrder(_id);
    }

    return (
        <TableRow
            key={order.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <img src={img} alt={order.title} width="50px" />
            </TableCell>
            <TableCell align="left">{email}</TableCell>
            <TableCell align="left">{title}</TableCell>
            <TableCell align="left">{price}</TableCell>
            <TableCell align="left">{_id}</TableCell>
            <TableCell align="left">{isShipped}</TableCell>
            <TableCell align="left">
                <IconButton onClick={() => {
                    handleConfirmation(false);
                    setIsOpen(true);
                }}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => handleShipped(order._id)}>
                    <CheckCircleOutlineIcon />
                </IconButton>
            </TableCell>
            <ConfirmationModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleConfirmation={handleConfirmation}
            >
                delete
            </ConfirmationModal>
        </TableRow>
    );
};

export default ManageOrder;