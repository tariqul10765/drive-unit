import { Button, Rating } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [rating, setRating] = useState(1);
    const { user } = useAuth();

    const handleSubmit = (e) => {
        const review = e.target.review.value;
        const data = {
            userName: user.displayName,
            userImg: user.imgURL,
            rating: rating,
            review: review
        }

        const url = `${process.env.REACT_APP_API_BASE_URL}/review/add-review`;

        fetch(url, {
            method: 'POST',
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
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                />
                <br />
                <TextField
                    id="standard-multiline-static"
                    label="Write Your Review Here"
                    name="review"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="standard"
                />
                <br />
                <br />
                <Button variant="outlined" type="submit">Send</Button>
            </form>
        </div>
    );
};

export default Review;