import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ data }) => {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    window.open(data.html_url, '_blank');
  };

  const handleClick = () => {
    navigate(`/profile/${data.login}`);
  }

  return  <div className="w-[10rem] md:w-full h-50 rounded overflow-hidden shadow-lg bg-gray-100 hover:bg-gray-200 transition duration-300 transform hover:scale-105 cursor-pointer ">
      <img className="w-full h-auto rounded-full p-5" src={data.avatar_url} alt="Avatar" onClick={handleProfileClick} />
      <div className="font-bold text-sm mb-2 pt-2 pl-4 text-ellipsis line-clamp-1 hover:bg-clip-text" onClick={handleClick}>{data.login}</div>
  </div>
}

export default UserCard;