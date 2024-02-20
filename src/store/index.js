import { create } from 'zustand'

const useGlobalStore = create((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
  users: [],
  setUsers: (users) => set({ users }),
  repos: [],
  setRepos: (repos) => set({ repos }),
  repoData: null,
  setRepoData: (repoData) => set({ repoData }),
  selectedRepos: {},
  setSelectedRepos: (selectedRepos) => set({ selectedRepos }),
  commitData: {},
  setCommitData: (commitData) => set({ commitData })
}))

export default useGlobalStore;