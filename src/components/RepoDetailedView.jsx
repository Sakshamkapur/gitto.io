import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getRepo, getCommits, listContributors, getReadMe, getIssues } from '../api/repo';
import useGlobalStore from '../store';
import RepoDetails from './RepoDetails';
import { allSettled } from '../utils/allSettled';
import ReadMe from './ReadMe';
import CommitsAndOpenIssues from './CommitsAndOpenIssues';
import ContributorsList from './ContributorsList';

const detailKeys = ['details','commits','contributors','readme','issues'];
const RepoDetailedView = () => {
    const { repoData, setRepoData } = useGlobalStore(({ repoData, setRepoData }) => ({ repoData, setRepoData }))
    const params = useParams();
    
    useEffect(() => {
        if(params.username && params.repoName){
            const { username, repoName } = params;
            allSettled([
                getRepo({ owner: username, repo: repoName }),
                getCommits({ owner: username, repo: repoName }),
                listContributors({ owner: username, repo: repoName }),
                getReadMe({ owner: username, repo: repoName }),
                getIssues({ owner: username, repo: repoName })
            ]).then((res) => {
                const result = res.reduce((acc, data, index) => {
                    if(data.status === 'fulfilled')
                    return {...acc, [detailKeys[index]]: data.value.data}
                    return acc;
                }, {});
                setRepoData(result);
            })
        }

        return () => {
            setRepoData(null);
        }
    }, []);
    
    return <div>
        <ReadMe content={repoData?.readme?.content || ''} />
        <ContributorsList contributors={repoData?.contributors || []} />
        <CommitsAndOpenIssues commits={repoData?.commits || []} issues={repoData?.issues || []} />
        {/* <RepoDetails repository={repoData?.details} /> */}
    </div>
}

export default RepoDetailedView;