import React from 'react';
import UserCard from './UserCard';

const ContributorsList = ({ contributors }) => {
    return (
        <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Contributors List</h3>
            <div className="flex flex-wrap gap-4">
                {contributors.map(contributor => (
                    <UserCard key={contributor.id} data={contributor} />
                ))}
            </div>
        </div>
    );
};

export default ContributorsList;
