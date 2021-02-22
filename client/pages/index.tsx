import React from 'react';
// Modules
import { NextPage } from 'next/types';
import { Button } from '@material-ui/core';

const HomePage: NextPage = () => {
    return (
        <>
            <h1>Chain Breaker ⛓</h1>
            <Button color="primary" variant="contained">My App</Button>
        </>
    );
};

export default HomePage;
