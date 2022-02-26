export const toastData = {
    title: 'Success!',
    description: 'Mail sent successfully.',
    status: 'success',
    duration: 5000,
    isClosable: true,
    position: 'bottom-right'
};

export const continentNames = ['All', 'Asia', 'North-America', 'South-America', 'Oceania', 'Europe', 'Africa'];

export const barChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'left',
        },
        title: {
            display: true,
            text: 'Top 6 countries with most cases',
        },
    },
    maintainAspectRatio: false,
};