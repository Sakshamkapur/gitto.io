import { octokit } from "../service/octokit"

export const searchUsers = (query) => {
    return octokit.rest.search.users({
      q: query,
    });
}