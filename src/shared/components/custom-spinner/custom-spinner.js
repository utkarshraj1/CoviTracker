import React from 'react';
import { Spinner } from '@chakra-ui/react';

const CustomSpinner = () => {
    return (
        <Spinner
            thickness='4px'
            speed='0.5s'
            emptyColor='gray.200'
            color='gray.500'
            size={'xl'}
            position={'absolute'}
            top={'50%'}
            left={'50%'}
        />
    );
}

export default CustomSpinner;