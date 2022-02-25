import { Button, Icon } from '@chakra-ui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { VscGraphLine, VscTable } from 'react-icons/vsc';

const ToggleButton = (props) => {

    const [lineChartActive, setLineChartActive] = useState();

    useEffect(() => {
        const localStorageKeyValue = localStorage.getItem('line');
        if (localStorageKeyValue !== null || localStorageKeyValue !== undefined) {
            setLineChartActive(localStorageKeyValue === 'false' ? false : true);
        }
    }, []);

    const lineChartButtonClickHandler = () => {
        setLineChartActive(true);
        setlocalStorageKeys(true);
        props.lineChartShow();
    }

    const tableButtonClickHandler = () => {
        setLineChartActive(false);
        setlocalStorageKeys(false);
        props.tableShow();
    }

    const setlocalStorageKeys = (value) => {
        localStorage.setItem('line', value);
        localStorage.setItem('table', !value);
    }

    return (
        <Fragment>
            <Button
                borderRadius={'0'}
                borderLeftRadius={'5px'}
                isActive={lineChartActive}
                onClick={lineChartButtonClickHandler}
            >
                <Icon as={VscGraphLine} />
            </Button>
            <Button
                borderRadius={'0'}
                borderRightRadius={'5px'}
                isActive={!lineChartActive}
                onClick={tableButtonClickHandler}
            >
                <Icon as={VscTable} />
            </Button>
        </Fragment>
    );
}

export default ToggleButton;