import React, { useEffect, useState } from "react";
import { listRepos } from "../api/repo";
import { useParams } from "react-router-dom";
import useGlobalStore from "../store";

let timer;
const RepoList = () => {
    const { repos, setRepos } = useGlobalStore(({ repos, setRepos }) => ({ repos, setRepos })) 
    const [search, setSearch] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [sortDirection, setSortDirection] = useState('desc');
    const params = useParams();
    
    useEffect(() => {
        if(params.username)
        listRepos(params.username).then((res) => {
            setRepos(res.data);
            setRepositories(res.data);
        })
    }, []);


    const sortRepositories = (sortByField) => {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        const sortedRepos = [...repos].sort((a, b) => {
        if (sortByField === 'name') {
            return a.name.localeCompare(b.name);
        } else {
            return a[sortByField] - b[sortByField];
        }
        });

        if (sortDirection === 'desc') {
        sortedRepos.reverse();
        }

        setRepositories(sortedRepos);
    };

    const handleSearch = (value) => {
        const filteredRepos = repos.filter((r) => r.name.toLowerCase().includes(value.trim().toLowerCase()));
        setRepositories(filteredRepos);
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
        timer = setTimeout(() => {
            handleSearch(e.target.value)
        }, 500);
    }

    return <div className="container mx-auto px-4 py-8">
        <div className="w-screen container max-w-full m-0 p-2 box-border">
            <div className="w-full bg-custom-third rounded-xl overflow-hidden">
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-black text-center">Gitto.io</h2>
                    <input value={search} type="text" className="flex-grow border border-custom-second rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-custom-fifth w-full" placeholder="Search Repos..." onChange={handleChange} />               
                </div>
            </div>
        </div>
        <div className="flex justify-between mb-4 px-4">
            <button className="flex items-center text-black hover:bg-gray-200 rounded-md p-2 text-sm transition-colors" onClick={() => sortRepositories('name')}>
                Name {sortDirection === 'asc' ? '(Ascending)':'(Descending)'}
            </button>
            <button className="flex items-center text-black hover:bg-gray-200 rounded-md p-2 text-sm transition-colors" onClick={() => { sortRepositories('stargazers_count'); }}>
            Stars {sortDirection === 'asc' ? '(Ascending)':'(Descending)'}
            </button>
            <button className="flex items-center text-black hover:bg-gray-200 rounded-md p-2 text-sm transition-colors" onClick={() => { sortRepositories('forks_count'); }}>
            Forks {sortDirection === 'asc' ? '(Ascending)':'(Descending)'}
            </button>
            <button className="flex items-center text-black hover:bg-gray-200 rounded-md p-2 text-sm transition-colors" onClick={() => { sortRepositories('open_issues_count'); }}>
            Open Issues {sortDirection === 'asc' ? '(Ascending)':'(Descending)'}
            </button>
        </div>
        <div className="flex flex-wrap -mx-4">
        {repositories.map(repo => (
            <div key={repo.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="bg-custom-third rounded-lg shadow-lg overflow-hidden">
                <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{repo.name}</h3>
                <p className="text-gray-700 mb-2">{repo.description}</p>
                <div className="flex justify-between text-sm text-gray-600">
                    <div>
                    <span className="mr-2">Stars: {repo.stargazers_count}</span>
                    <span className="mr-2">Forks: {repo.forks_count}</span>
                    <span>Open Issues: {repo.open_issues_count}</span>
                    </div>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on GitHub</a>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
}

export default RepoList;