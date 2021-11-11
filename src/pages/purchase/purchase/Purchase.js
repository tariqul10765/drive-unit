import React from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const { purchaseId } = useParams();
    return (
        <div>
            <h1>{purchaseId}</h1>
        </div>
    );
};

export default Purchase;