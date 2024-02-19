import { create } from 'zustand'

const useGlobalStore = create((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
  users: [],
  setUsers: (users) => set({ users }),
  repos: [],
  setRepos: (repos) => set({ repos })
}))

export default useGlobalStore;