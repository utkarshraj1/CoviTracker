import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    Button,
    Stack,
    Textarea
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import CustomInput from '../../shared/components/custom-input/custom-input';
import { emailJsServiceData } from '../../shared/data/api-url';
import { toastData } from '../../shared/data/static-text';

const ContactUs = (props) => {

    const [nameData, setNameData] = useState('');
    const [emailData, setEmailData] = useState('');
    const [phoneData, setPhoneData] = useState('');
    const [messageData, setMessageData] = useState('');

    let debounceTime = setTimeout(() => { });

    const emailValidityCheckHandler = (inp) => {
        return inp.includes('@') ? true : false;
    }

    const phoneNumberValidityCheckHandler = (inp) => {
        return inp.toString().length === 10 && !isNaN(parseInt(inp)) ? true : false;
    }

    const nameValidityCheckHandler = (inp) => {
        return isNaN(parseInt(inp.toString())) ? true : false;
    }

    const nameSetter = (inputData) => {
        setNameData(inputData);
    }

    const emailSetter = (inputData) => {
        setEmailData(inputData);
    }

    const phoneSetter = (inputData) => {
        setPhoneData(inputData);
    }

    const messageSetChangeHandler = (event) => {
        clearTimeout(debounceTime);
        debounceTime = setTimeout(() => {
            setMessageData(event.target.value);
        }, 800);
    }

    const formSubmissionHandler = () => {
        const data = {
            name: nameData,
            email: emailData,
            phone: phoneData,
            message: messageData
        };
        console.log(data);
        emailjs.send(emailJsServiceData.service, emailJsServiceData.template, data, emailJsServiceData.user)
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
        props.toast(toastData);
        props.onClose();
    }

    return (
        <Modal size={'xl'} isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Connect With Me</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing={4}>
                        <CustomInput
                            children={'Name'}
                            checkValidity={nameValidityCheckHandler}
                            getInputData={nameSetter}
                        />
                        <CustomInput
                            children={'Email'}
                            checkValidity={emailValidityCheckHandler}
                            getInputData={emailSetter}
                        />
                        <CustomInput
                            children={'Mobile'}
                            checkValidity={phoneNumberValidityCheckHandler}
                            getInputData={phoneSetter}
                        />
                        <Textarea
                            placeholder='Enter your message'
                            isRequired
                            onChange={messageSetChangeHandler}
                        />
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme={'green'}
                        onClick={formSubmissionHandler}
                    >
                        Send
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ContactUs;