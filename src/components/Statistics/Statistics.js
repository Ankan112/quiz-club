import React from 'react';
import './Statistics.css'
import { Legend, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const chartData = useLoaderData();
    console.log(chartData.data)

    return (
        <div>
            <h2 className='mt-3'>Total Quiz</h2>
            <BarChart className='chart' width={400} height={300} data={chartData.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>
        </div>
    );
};

export default Statistics;