import { Button, Icon } from '@chakra-ui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { VscTable } from 'react-icons/vsc';
import { BsFillBarChartFill } from 'react-icons/bs';

const ToggleButton = (props) => {

    const [barChartActive, setBarChartActive] = useState();

    useEffect(() => {
        const localStorageKeyValue = localStorage.getItem('bar');
        if (localStorageKeyValue !== null || localStorageKeyValue !== undefined) {
            setBarChartActive(localStorageKeyValue === 'false' ? false : true);
        }
    }, []);

    const barChartButtonClickHandler = () => {
        setBarChartActive(true);
        setlocalStorageKeys(true);
        props.barChartShow();
    }

    const tableButtonClickHandler = () => {
        setBarChartActive(false);
        setlocalStorageKeys(false);
        props.tableShow();
    }

    const setlocalStorageKeys = (value) => {
        localStorage.setItem('bar', value);
        localStorage.setItem('table', !value);
    }

    return (
        <Fragment>
            <Button
                borderRadius={'0'}
                borderLeftRadius={'5px'}
                isActive={barChartActive}
                onClick={barChartButtonClickHandler}
            >
                <Icon as={BsFillBarChartFill} />
            </Button>
            <Button
                borderRadius={'0'}
                borderRightRadius={'5px'}
                isActive={!barChartActive}
                onClick={tableButtonClickHandler}
            >
                <Icon as={VscTable} />
            </Button>
        </Fragment>
    );
}

export default ToggleButton;