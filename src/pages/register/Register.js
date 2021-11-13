import { Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const useStyle = makeStyles({
    form__container: {
        width: '30%',
        margin: '50px auto 0',
        "@media (max-width: 767px)": {
            width: '90%'
        }
    },
    input: {
        width: '100%',
        marginBottom: '10px'
    }
})

const Register = () => {
    const classes = useStyle();
    const { control, handleSubmit, reset } = useForm();
    const { createUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';

    const onSubmit = (data) => {
        const { userName, email, password } = data;

        reset();

        createUser(history, redirect_url, userName, email, password);
    }

    return (
        <div>
            <Box className={classes.form__container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="userName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField
                            {...field}
                            className={classes.input}
                            id="outlined-basic"
                            label="userName"
                            variant="outlined"
                            type="text"
                        />}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
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
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField
                            {...field}
                            className={classes.input}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type="password"
                        />}
                    />

                    <Button type='submit' variant="outlined">Register</Button>
                </form>
                <p>
                    Already have an account? <NavLink to='/login'>Login</NavLink>
                </p>
            </Box>
        </div>
    );
};

export default Register;