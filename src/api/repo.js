import { octokit } from "../service/octokit";

export const listRepos = (username) => {
    return octokit.rest.repos.listForUser({
        username,
    });
} 