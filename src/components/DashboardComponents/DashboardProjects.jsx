"use client";

import React, { useEffect, useState } from "react";
import { RiAddLargeLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import ProjectForm from "./ProjectForm";
import axios from "axios";
import DashboardProjectCards from "./DashboardProjectCards";

const DashboardProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
        { withCredentials: true }
      );
      setProjects(response.data);
    };
    getProjects();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h2 className="text-lg lg:text-2xl">Projects</h2>
        <button
          className={`px-4 py-1.5 ${
            isOpen
              ? "bg-[#2F1E1E] text-[#E63E3E]"
              : "bg-blue-500 hover:bg-blue-600"
          } border border-transparent rounded-sm hover:scale-102 transition-all duration-200 cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="flex items-center gap-1">
              <RxCross1 /> Cancel
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <RiAddLargeLine /> Add Projects
            </span>
          )}
        </button>
      </div>
      {isOpen && <ProjectForm setIsOpen={setIsOpen} setProjects={setProjects} />}
      <div className="flex flex-col gap-10">
        {projects.map((project, idx) => {
          return (
            <DashboardProjectCards
              key={idx}
              id={project._id}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
              setProjects={setProjects}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardProjects;
