import React,{ useEffect, useRef } from 'react';
import useGlobalStore from '../store';
import { getCommits } from '../api/repo';
import { unique } from '../utils/unique';
import Chart from 'chart.js/auto';
import { getChartFormat } from '../utils/getChartFormat';
import { getRandomColor } from '../utils/getRandomColor';

const CommitHistoryChart = () => {
    const { selectedRepos, commitData, setCommitData } = useGlobalStore(({ selectedRepos, commitData, setCommitData }) => ({ selectedRepos, commitData, setCommitData }))
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);
    const chartData = getChartFormat({ commitData, selectedRepos })
    
    useEffect(() => {
        const findDiff = unique(Object.keys(commitData),Object.keys(selectedRepos),[]);
        if(findDiff.length > 0){
            findDiff.forEach((id) => {
                const repo = selectedRepos[id];
                if(repo && !commitData[repo.id])
                getCommits({ owner: repo.owner.login, repo: repo.name }).then((res) => {
                    setCommitData({...commitData,[repo.id]: res.data })
                })
            })
        }
    }, [selectedRepos]);

useEffect(() => {
    let labels = [];
    if (chartInstance.current) {
        chartInstance.current.destroy();
    }

    // Initialize datasets
    const datasets = chartData.map(repo => {
        const aggregatedData = repo.commitsData.reduce((acc, commit) => {
            const [day, month, year] = commit.date.split('/');
            const key = `${year}-${month.padStart(2, '0')}`;
            acc[key] = (acc[key] || 0) + commit.count;
            return acc;
        }, {});

        labels = Object.keys(aggregatedData).sort();
        const commitCounts = Object.values(aggregatedData);

        return {
            label: repo.repositoryName,
            data: commitCounts,
            borderColor: getRandomColor(), // Function to get random color
            borderWidth: 2,
            fill: false,
        };
    });

    const ctx = chartContainer.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: datasets,
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month',
                        tooltipFormat: 'MMMM yyyy'
                    },
                    ticks: {
                        maxTicksLimit: 10 // Maximum number of ticks to display
                    }
                },
                y: {
                    beginAtZero: true,
                    precision: 0
                }
            }
        }
    });

    return () => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
    };
}, [chartData]);

    return (
        <div className='w-full p-4' style={{ position: 'relative', width: '100%', height: '500px' }}>
            <canvas ref={chartContainer} />
        </div>
    );
};

export default CommitHistoryChart;