import React from "react";
import useGlobalStore from "../store";
import UserCard from "./UserCard";

const ListUsers = () => {
    const { users } = useGlobalStore((state) => ({ users: state.users }));

    return <div className='flex flex-wrap gap-6 w-fit mx-auto justify-flex-start px-5'>
        {users.map((user) => (
            <UserCard key={user.id} data={user} />
        ))}
    </div>
}

export default ListUsers;