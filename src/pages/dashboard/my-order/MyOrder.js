import { IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import ConfirmationModal from '../confirmation-modal/ConfirmationModal';

const MyOrder = ({ order, handleDeleteOrder }) => {
    const { _id, title, price, img } = order;
    const [isOpen, setIsOpen] = useState(false);

    const handleConfirmation = (isConfirm) => {

        if (isConfirm) handleDeleteOrder(_id);
    }

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <img src={img} alt={title} width="50px" />
            </TableCell>
            <TableCell align="right">{title}</TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right">{_id}</TableCell>
            <TableCell align="right">
                <IconButton
                    onClick={() => {
                        handleConfirmation(false);
                        setIsOpen(true);
                    }}>
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

export default MyOrder;