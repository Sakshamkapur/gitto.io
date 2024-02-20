import React from 'react';

const RepoDetails = ({ repository }) => {
    if(!repository) return null;
    return  <div>
        <h2>{repository.name}</h2>
        <p>{repository.description}</p>
        <h3>Recent Commits</h3>
        <ul>
            {repository.recentCommits.map(commit => (
                <li key={commit.sha}>
                    <span>{commit.message}</span>
                    <span>{commit.author}</span>
                    <span>{commit.date}</span>
                </li>
            ))}
        </ul>
        <h3>Open Issues</h3>
        <ul>
            {repository.openIssues.map(issue => (
                <li key={issue.id}>
                    <span>{issue.title}</span>
                    <span>{issue.author}</span>
                    <span>{issue.date}</span>
                </li>
            ))}
        </ul>
    </div>
}

export default RepoDetails;