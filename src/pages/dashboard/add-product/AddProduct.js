import { Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ConfirmationModal from '../confirmation-modal/ConfirmationModal';


const useStyle = makeStyles({
    form__container: {
        width: '30%',
        margin: '50px auto 0'
    },
    input: {
        width: '100%',
        marginBottom: '10px'
    }
})

const AddProduct = () => {
    const classes = useStyle();
    const { control, handleSubmit } = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [inputData, setInputData] = useState({});


    const onSubmit = (data) => {
        setInputData(data)

    }

    const handleConfirmation = (isConfirm) => {

        if (isConfirm) {
            const url = `${process.env.REACT_APP_API_BASE_URL}/products/add-product`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputData)
            })
        }
    }

    return (
        <div>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="title"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField
                            {...field}
                            className={classes.input}
                            id="outlined-basic"
                            label="Product Name"
                            variant="outlined"
                            type="text"
                            required
                        />}
                    />
                    <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField
                            {...field}
                            className={classes.input}
                            id="outlined-basic"
                            label="Product description"
                            variant="outlined"
                            type="text"
                            required
                        />}
                    />
                    <Controller
                        name="price"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField
                            {...field}
                            className={classes.input}
                            id="outlined-basic"
                            label="Product Price"
                            variant="outlined"
                            type="number"
                            required
                        />}
                    />
                    <Controller
                        name="img"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField
                            {...field}
                            className={classes.input}
                            id="outlined-basic"
                            label="Image url"
                            variant="outlined"
                            type="text"
                            required
                        />}
                    />

                    <Button
                        type='submit'
                        variant="outlined"
                        onClick={() => {
                            handleConfirmation(false);
                            setIsOpen(true);
                        }}
                    >Add Product</Button>
                </form>
                <ConfirmationModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    handleConfirmation={handleConfirmation}
                >confirm</ConfirmationModal>
            </Box>
        </div>
    );
};

export default AddProduct;