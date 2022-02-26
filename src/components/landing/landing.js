import { Box, useDisclosure, useToast } from '@chakra-ui/react';
import React from 'react';
import Navigation from '../../shared/components/navigation/navigation';
import ChartsPage from '../charts-page/charts-page';
import ContactUs from '../contact-us/contactUs';

const Landing = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    return (
        <Box>
            <Navigation emailButtonClick={onOpen} />
            <ContactUs isOpen={isOpen} onClose={onClose} toast={toast} />
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