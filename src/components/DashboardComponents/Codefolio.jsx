"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PiCopy } from "react-icons/pi";
import { IoCheckmark, IoLogoGithub } from "react-icons/io5";
import DashboardCodingPlatforms from "./DashboardCodingPlatforms";
import DashboardProjects from "./DashboardProjects";
import { useSelector } from "react-redux";

const Codefolio = () => {
  
  const user = useSelector(state => state.auth.user);
  const shareLink = `http://localhost:3000/explore/${user?.username}`;
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setIsCopied(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <motion.div
      className="black-bg flex flex-col gap-5 p-4 sm:p-8 rounded-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-start gap-2">
        <div className="w-full flex justify-between items-center gap-4">
          <h2 className="text-lg lg:text-2xl">Share Your Profile URL</h2>
          <span
            className="text-xl p-2 bg-zinc-900 rounded-md cursor-pointer border border-white/10"
            onClick={handleCopy}
          >
            {isCopied ? <IoCheckmark /> : <PiCopy />}
          </span>
        </div>
        <p className="hidden sm:block w-full py-2 px-4 bg-zinc-900 rounded-md text-sm sm:text-base border border-white/10">
          {shareLink}
        </p>
      </div>
      {user?.github && (
        <div className="flex items-center gap-2 text-lg sm:text-xl">
          <IoLogoGithub />
          <a href={`https://github.com/${user?.github}`} target="_blank">
            <span className="hover:underline text-blue-500">
              GitHub : {user?.github}
            </span>
          </a>
        </div>
      )}
      <DashboardCodingPlatforms />
      <DashboardProjects />
    </motion.div>
  );
};

export default Codefolio;