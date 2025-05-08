'use client'

import { logout } from "@/redux/features/authSlice";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";

const LogoutButton = () => {

  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {}, { withCredentials: true });
    dispatch(logout());
  }

  return (
    <button 
      className="flex justify-center w-full sm:w-56 py-1.5 text-[#E63E3E] bg-[#2F1E1E] border border-transparent rounded-sm hover:scale-102 transition-all duration-300 cursor-pointer"
      onClick={logoutHandler}>
        Logout
    </button>
  );
};

export default LogoutButton;
