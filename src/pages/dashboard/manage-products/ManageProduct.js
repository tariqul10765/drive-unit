import { IconButton, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationModal from '../confirmation-modal/ConfirmationModal';

const ManageProduct = ({ product, handleDeleteOrder }) => {

    const [isOpen, setIsOpen] = useState(false);


    const handleConfirmation = (isConfirm) => {

        if (isConfirm) handleDeleteOrder(product._id);
    }

    return (
        <TableRow
            tabIndex={-1}
            key={product.title}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <img src={product.img} alt={product.title} width="50px" />
            </TableCell>
            <TableCell align="left">{product.title}</TableCell>
            <TableCell align="left">{product.price}</TableCell>
            <TableCell align="left">
                <IconButton
                    onClick={() => {
                        handleConfirmation(false);
                        setIsOpen(true);
                    }}
                >
                    <DeleteIcon />
                </IconButton>
            </TableCell>
            <ConfirmationModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleConfirmation={handleConfirmation}
            >delete</ConfirmationModal>
        </TableRow>

    );
};

export default ManageProduct;