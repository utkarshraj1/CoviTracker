import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import React, { useState } from 'react';

const CustomInput = (props) => {
    const [isInvalid, setIsInvalid] = useState(false);
    const [inputData, setInputData] = useState('');

    let debounceTimer = setTimeout(() => { });

    const inputChangeHandler = (event) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const validity = props.checkValidity(event.target.value);
            setIsInvalid(!validity);
            setInputData(!isInvalid ? event.target.value : '');
        }, 500);
    }

    const inputBlurHandler = () => {
        setTimeout(() => {
            props.getInputData(inputData);
        }, 900);
    }

    return (
        <InputGroup>
            <InputLeftAddon children={props.children} />
            <Input
                type={'text'}
                isInvalid={isInvalid}
                isRequired
                variant={'outline'}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
            />
        </InputGroup>
    );
}

export default CustomInput;