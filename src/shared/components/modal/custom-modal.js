import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    Button
} from '@chakra-ui/react';
import React from 'react';

const CustomModal = (props) => {
    return (
        <Modal size={'xl'} isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Connect With Me</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Body
                </ModalBody>
                <ModalFooter>
                    <Button onClick={props.onClose} colorScheme={'green'}>Send</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default CustomModal;