import { octokit } from "../service/octokit";

export const listRepos = (username) => {
    return octokit.rest.repos.listForUser({
        username,
    });
} 

export const getRepo = ({ owner, repo }) => {
    return octokit.rest.repos.get({
        owner,
        repo
    })
}

export const getCommits = ({ owner, repo }) => {
    return octokit.rest.repos.listCommits({
        owner,
        repo,
    });
}

export const listContributors = ({ owner, repo }) => {
    return octokit.rest.repos.listContributors({
        owner,
        repo,
    });
}

export const getReadMe = ({ owner, repo }) => {
    return octokit.rest.repos.getReadme({
        owner,
        repo,
    });
}

export const getIssues = ({ owner, repo }) => {
    return octokit.rest.issues.listForRepo({
        owner,
        repo,
    });
}