import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CustomBarChart from '../../shared/components/bar-chart/bar-chart';
import CustomDataTable from '../../shared/components/table/table';
import ToggleButton from '../../shared/components/toggle-button/toggle-button';

const ChartsPage = () => {

    const [currentPage, setCurrentPage] = useState('bar');

    useEffect(() => {
        setCurrentPage(localStorage.getItem('bar') === 'true'
            ? 'bar'
            : 'table');
    }, []);

    const barChartShow = () => {
        setCurrentPage('bar');
    }

    const tableShow = () => {
        setCurrentPage('table');
    }

    return (
        <Flex
            direction={'column'}
            justify={'center'}
            align={'center'}
        >
            <Box
                h={'500px'}
                w={'950px'}
                border={'1px'}
                borderColor={'gray.400'}
                borderRadius={'15px'}
            >
                <Flex
                    h={'12%'}
                    borderBottom={'1px'}
                    borderBottomColor={'gray.200'}
                    mx={'1'}
                >
                    <Box p={'3'}>
                        <Text fontSize='xs'>*Data sourced from free API</Text>
                    </Box>
                    <Spacer />
                    <Box p={'2'}>
                        <ToggleButton
                            barChartShow={barChartShow}
                            tableShow={tableShow}
                        />
                    </Box>
                </Flex>
                <Box
                    h={'88%'}
                    p={'5px'}
                >
                    {currentPage === 'bar' && <CustomBarChart />}
                    {currentPage === 'table' && <CustomDataTable />}
                </Box>
            </Box>
        </Flex>
    );
}

export default ChartsPage;