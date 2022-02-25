import { Box, Spacer, Flex, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { EmailIcon } from '@chakra-ui/icons';

const Navigation = (props) => {

    const emailUsButtonClickHandler = () => {
        props.emailButtonClick();
    }

    return (
        <Flex>
            <Box p={'2'}>
                <Text
                    fontFamily={"'Megrim', cursive"}
                    fontWeight={'600'}
                    fontSize={'29px'}
                >
                    The Watcher
                </Text>
            </Box>
            <Spacer />
            <Box p={'2'}>
                <Button
                    onClick={emailUsButtonClickHandler}
                    leftIcon={<EmailIcon />}
                    colorScheme={'gray'}
                    variant='solid'
                >
                    Email Us
                </Button>
            </Box>
        </Flex>
    );
}

export default Navigation;