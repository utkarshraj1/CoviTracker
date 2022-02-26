import { Box, Spinner } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { barChartOptions, continentNames } from '../../data/static-text';
import { covidApiURL, initFetchValue } from '../../data/api-url';
import CustomSpinner from '../custom-spinner/custom-spinner';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = barChartOptions;
const url = covidApiURL.totalData;

const CustomBarChart = () => {

    const [chartLoading, setChartLoading] = useState(true);
    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: ''
        }]
    });

    const fetchResponse = async (passedUrl) => {
        const fetchData = await fetch(passedUrl, initFetchValue);
        const response = await fetchData.json();
        return response;
    }

    // Transforms the response into component friendly obj
    const transformResponse = (response) => {
        response = response.map(data => {
            return {
                country: data.country,
                totalcases: data.cases.total,
                totaldeaths: data.deaths.total
            };
        });
        response = response.sort((a, b) => b.totalcases - a.totalcases);
        response = response.filter(data => {
            const present = continentNames.find((name) => name === data.country);
            if (!present) {
                return data;
            }
        });
        return response;
    }

    useEffect(async () => {
        setChartLoading(true);
        let responsedData = await fetchResponse(url);
        const top6Data = transformResponse(responsedData.response).slice(0, 6);
        setData(prevState => {
            return {
                labels: top6Data.map(c => c.country),
                datasets: [{
                    label: 'Total Cases',
                    data: top6Data.map(c => c.totalcases),
                    backgroundColor: 'rgba(84, 110, 122, 0.5)'
                }, {
                    label: 'Total Deaths',
                    data: top6Data.map(c => c.totaldeaths),
                    backgroundColor: 'rgba(109, 76, 65, 0.5)'
                }]
            };
        });
        setChartLoading(false);
    }, []);

    return (
        <Box
            h={'388px'}
        >
            {chartLoading && <CustomSpinner />}
            {!chartLoading && <Bar
                options={options}
                data={data}
            />}
        </Box>
    );
}

export default CustomBarChart;