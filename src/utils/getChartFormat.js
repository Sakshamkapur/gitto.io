export const getChartFormat = ({ commitData, selectedRepos }) => {
    if(Object.keys(commitData).length === 0 && Object.keys(selectedRepos).length === 0) return [];
    const results = Object.keys(commitData || {}).map((key, index) => {
        if(!selectedRepos[key]) return null;
        const repositoryName = selectedRepos[key].name;
        const commitsData = [];
        
        commitData[key]?.forEach((commit) => {
            const date = new Date(commit?.commit?.committer?.date)?.toLocaleDateString();
            const existingCommitIndex = commitsData.findIndex((commitData) => commitData.date === date);
            if (existingCommitIndex !== -1) {
                commitsData[existingCommitIndex].count++;
            } else {
                commitsData.push({ date, count: 1 });
            }
        });
        
        return { repositoryName, commitsData };
    });
    
    return results.filter((r) => r);
};