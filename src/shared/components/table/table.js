import {
    Box,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { covidApiURL, initFetchValue } from '../../data/api-url';
import CustomSpinner from '../custom-spinner/custom-spinner';

const url = covidApiURL.totalData;

const headings = ['Country',
    'Total Cases', 'Active Cases', 'Total Recovered', 'New Cases', 'Cases per mil',
    'Total Deaths', 'New Deaths', 'Deaths per mil',
    'Total Population', 'Total Tests', 'Tests per mil'];

const CustomDataTable = () => {

    const [tableLoading, setTableLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchResponse = async (passedUrl) => {
        const fetchData = await fetch(passedUrl, initFetchValue);
        const res = await fetchData.json();
        return res;
    }

    const renderedHeadings = headings.map(head => <Th key={Math.random().toFixed(10)}>
        {head}
    </Th>);
    const renderedRows = data.length !== 0 ? data.map(data => {
        const { country, cases, deaths, tests } = data;
        return <Tr key={Math.random().toFixed(90)}>
            <Td>{country}</Td>
            <Td>{cases.total === null ? '-' : cases.total}</Td>
            <Td>{cases.active === null ? '-' : cases.active}</Td>
            <Td>{cases.recovered === null ? '-' : cases.recovered}</Td>
            <Td>{cases.new === null ? '-' : cases.new}</Td>
            <Td>{cases['Pop_1m'] === null ? '-' : cases['Pop_1m']}</Td>
            <Td>{deaths.total === null ? '-' : deaths.total}</Td>
            <Td>{deaths.new === null ? '-' : deaths.new}</Td>
            <Td>{deaths['Pop_1m'] === null ? '-' : deaths['Pop_1m']}</Td>
            <Td>{data.population === null ? '-' : data.population}</Td>
            <Td>{tests.total === null ? '-' : tests.total}</Td>
            <Td>{tests['Pop_1m'] === null ? '-' : tests['Pop_1m']}</Td>
        </Tr>
    }) : <Tr></Tr>

    const transformResponse = (arr) => {

        return arr.map(data => {
            return {
                country: data.country,
                cases: {
                    Pop_1m: data.cases['1M_pop'],
                    active: data.cases.active,
                    new: data.cases.new,
                    recovered: data.cases.recovered,
                    total: data.cases.total
                },
                deaths: {
                    Pop_1m: data.deaths['1M_pop'],
                    new: data.deaths.new,
                    total: data.deaths.total,
                },
                population: data.population,
                tests: {
                    Pop_1m: data.tests['1M_pop'],
                    total: data.tests.total
                }
            }
        }).sort((a, b) => b.cases.total - a.cases.total);
    }

    useEffect(async () => {
        setTableLoading(true);
        const res = await fetchResponse(url);
        const countriesData = transformResponse(res.response);
        setData(countriesData);
        setTableLoading(false);
    }, []);

    return (
        <Box
            h={'420px'}
            overflowY={'auto'}
            overflowX={'auto'}
        >
            {!tableLoading ? <Table variant={'simple'} display={'block'}>
                <TableCaption textAlign={'left'} placement={'top'}>List of countries</TableCaption>
                <Thead position={'sticky'} top={'0'} backgroundColor={'gray.100'}>
                    <Tr>
                        {renderedHeadings}
                    </Tr>
                </Thead>
                <Tbody>
                    {renderedRows}
                </Tbody>
            </Table> : <CustomSpinner />}
        </Box>
    );
}

export default CustomDataTable;