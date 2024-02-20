import { Octokit } from "octokit";

export const octokit = new Octokit({ 
  auth: process.env.REACT_APP_GITHUB_AUTH,
  request: {
    retries: 3, // Number of retries for failed requests
    retryAfter: 60, // Default time to wait before retrying (in seconds)
  },
});