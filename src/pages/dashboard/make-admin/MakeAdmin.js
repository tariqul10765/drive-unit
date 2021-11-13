import { Button, TextField } from '@mui/material';
import React from 'react';

const MakeAdmin = () => {
    const handleSubmit = (e) => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/user/update-user`;
        const data = {
            email: e.target.email.value
        };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Enter Email..."
                    variant="outlined"
                    name="email"
                    required
                />
                <br />
                <br />
                <Button variant="outlined" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;