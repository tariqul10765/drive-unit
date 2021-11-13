import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ConfirmationModal = ({ isOpen, setIsOpen, handleConfirmation, children }) => {


    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You want to {children} this?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="text" onClick={handleClose}>Cancel</Button>
                        <Button variant="text"
                            onClick={() => {
                                handleConfirmation(true);
                                handleClose();
                            }}
                        >{children}</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default ConfirmationModal;