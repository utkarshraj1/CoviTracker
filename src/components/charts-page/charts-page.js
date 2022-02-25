import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import CustomLineChart from '../../shared/components/line-chart/line-chart';
import CustomDataTable from '../../shared/components/table/table';
import ToggleButton from '../../shared/components/toggle-button/toggle-button';

const ChartsPage = () => {

    const [currentPage, setCurrentPage] = useState('line');

    useEffect(() => {
        setCurrentPage(localStorage.getItem('line') === 'true'
            ? 'line'
            : 'table');
    }, []);

    const lineChartShow = () => {
        setCurrentPage('line');
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
            <Heading>Covid Cases</Heading>
            <Box
                h={'450px'}
                w={'900px'}
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
                        {currentPage.includes('line') ? <Text>Trend</Text>
                            : <Text>Countries</Text>}
                    </Box>
                    <Spacer />
                    <Box p={'2'}>
                        <ToggleButton
                            lineChartShow={lineChartShow}
                            tableShow={tableShow}
                        />
                    </Box>
                </Flex>
                <Box
                    h={'88%'}
                    p={'5px'}
                >
                    {currentPage === 'line' && <CustomLineChart />}
                    {currentPage === 'table' && <CustomDataTable />}
                </Box>
            </Box>
        </Flex>
    );
}

export default ChartsPage;