"use client";

import Codefolio from "@/components/DashboardComponents/Codefolio";
import Profile from "@/components/DashboardComponents/Profile";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import React, { useState } from "react";
import { LuUser } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";

const Dashboard = () => {
  const [active, setActive] = useState("profile");

  return (
    <ProtectedRoutes>
      <main className="px-4 sm:px-12 lg:px-48 py-6 sm:py-12">
        <div className="flex flex-col gap-4 sm:gap-6 w-full bg-zinc-900 p-4 sm:p-6 rounded-md border border-white/5">
          <h1 className="text-4xl lg:text-5xl font-medium">Dashboard</h1>
          <div className="w-full flex items-center gap-1 black-bg p-1.5 rounded-sm">
            <button
              className={`w-full flex justify-center items-center gap-1 ${
                active === "profile" ? "bg-zinc-900" : ""
              } text-base sm:text-lg py-1.5 rounded-sm cursor-pointer`}
              onClick={() => setActive("profile")}
            >
              <LuUser /> Profile
            </button>
            <button
              className={`w-full flex justify-center items-center gap-1 ${
                active === "codefolio" ? "bg-zinc-900" : ""
              } text-base sm:text-lg py-1.5 rounded-sm cursor-pointer`}
              onClick={() => setActive("codefolio")}
            >
              <RxDashboard /> Codefolio
            </button>
          </div>
          {active === "profile" && <Profile />}
          {active === "codefolio" && <Codefolio />}
        </div>
      </main>
    </ProtectedRoutes>
  );
};

export default Dashboard;
