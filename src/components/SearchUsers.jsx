import React from "react";
import useGlobalStore from "../store";
import { searchUsers } from "../api/user";

let timer;
const SearchUsers = () => {
    const { search, setUsers, setSearch } = useGlobalStore((state) => ({ search: state.search, setUsers: state.setUsers, setSearch: state.setSearch }));

    const handleChange = (e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value)
    }

    const handleSearch = (value) => {
        if(!value) return;
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          searchUsers(value).then((res) => {
            setUsers(res.data.items);
          })
        }, 500);
    }

    return <div className="w-screen container max-w-full m-0 p-2 box-border">
        <div className="w-full bg-custom-third rounded-xl overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black text-center">Gitto.io</h2>
                <input value={search} type="text" className="flex-grow border border-custom-second rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-custom-fifth w-full" placeholder="Search Github Users..." onChange={handleChange} />               
            </div>
        </div>
    </div>
}

export default SearchUsers;