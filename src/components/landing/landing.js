import { Box, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import CustomModal from '../../shared/components/modal/custom-modal';
import Navigation from '../../shared/components/navigation/navigation';
import ChartsPage from '../charts-page/charts-page';

const Landing = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            <Navigation emailButtonClick={onOpen} />
            <CustomModal isOpen={isOpen} onClose={onClose} />
            <Box
                display={'flex'}
                justifyContent={'center'}
            >
                <ChartsPage />
            </Box>
        </Box>
    );
}

export default Landing;