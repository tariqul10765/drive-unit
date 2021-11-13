import { Button, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ConfirmationModal from '../../dashboard/confirmation-modal/ConfirmationModal';

const useStyle = makeStyles({
    container: {
        margin: '50px auto 0'
    },
    form__container: {
        width: '90%',
        margin: '0 auto'
    },
    input: {
        width: '100%',
        marginBottom: '10px'
    }
})

const Purchase = () => {
    const classes = useStyle();
    const { purchaseId } = useParams();
    const { control, handleSubmit } = useForm();
    const { user } = useAuth();
    const history = useHistory();

    const redirect_url = '/explore-products';

    const [isOpen, setIsOpen] = useState(false);
    const [inputData, setInputData] = useState({});
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/products/get-single-product/${purchaseId}`;

        fetch(url)
            .then(res => res.json())
            .then(json => setProduct(json.data))
    }, [purchaseId]);

    const onSubmit = (d) => {
        setInputData(d)
    }

    const handleConfirmation = (isConfirm) => {

        if (isConfirm) {
            const url = `${process.env.REACT_APP_API_BASE_URL}/order/add-order`;
            const { _id, ...productWithoutId } = product;

            const data = { ...inputData, uId: user.uid, ...productWithoutId };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(res => {
                    history.push(redirect_url);
                })
        }
    }

    return (
        <div>
            <Grid container className={classes.container}>
                <Grid item md={6}>
                    <form onSubmit={handleSubmit(onSubmit)} className={classes.form__container}>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={user.displayName}
                            render={({ field }) => <TextField
                                {...field}
                                className={classes.input}
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                type="text"
                            />}
                        />

                        <Controller
                            name="email"
                            control={control}
                            defaultValue={user.email}
                            render={({ field }) => <TextField
                                {...field}
                                className={classes.input}
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                type="email"
                            />}
                        />

                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <TextField
                                {...field}
                                className={classes.input}
                                id="outlined-basic"
                                label="Phone No"
                                variant="outlined"
                                type="text"
                            />}
                        />
                        <Controller
                            name="address"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <TextField
                                {...field}
                                className={classes.input}
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                type="text"
                            />}
                        />

                        <Button type='submit' variant="outlined"
                            onClick={() => setIsOpen(true)}
                        >
                            PURCHASE
                        </Button>
                    </form>
                    <ConfirmationModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        handleConfirmation={handleConfirmation}
                    >confirm</ConfirmationModal>
                </Grid>
                <Grid item md={6}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography variant="h5">{product.title}</Typography>
                            <Typography variant="body2">{product.description}</Typography>
                            <Typography variant="h5">${product.price}</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <img src={product.img} alt="" width="100%" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
};

export default Purchase;