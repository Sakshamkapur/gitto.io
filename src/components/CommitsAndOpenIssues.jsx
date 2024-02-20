import React, { useEffect } from 'react';
import { format } from 'date-fns';

const CommitsAndOpenIssues = ({ commits }) => {
    return <div className="overflow-auto max-h-80 bg-gray-100 p-4 rounded-md shadow-md">
        <ul className="divide-y divide-gray-200">
            {commits.map(commit => (
            <li key={commit.sha} className="py-2">
                <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold">{commit.commit.message}</h3>
                    <p className="text-sm text-black">By {commit.commit.author.name}</p>
                </div>
                <a href={commit.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Commit</a>
                </div>
                <p className="text-sm mt-1 text-gray-700">{format(new Date(commit.commit.author.date), 'MMMM dd, yyyy')}</p>
            </li>
            ))}
        </ul>
    </div>
}

export default CommitsAndOpenIssues;