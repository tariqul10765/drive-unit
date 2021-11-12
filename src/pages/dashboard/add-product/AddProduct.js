import { Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';


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
    const { control, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        // const { title, description, price, img } = data;


        const url = `${process.env.REACT_APP_API_BASE_URL}/products/add-product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
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
                        />}
                    />

                    <Button type='submit' variant="outlined">Add Product</Button>
                </form>
            </Box>
        </div>
    );
};

export default AddProduct;