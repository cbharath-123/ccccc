"use client";

import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <div
      className="group bg-[#0a0a0a] rounded-[14px] border border-[#1a1a1a] overflow-hidden
                 shadow-[0px_0px_0px_4px_rgba(115,112,255,0.15)]
                 hover:shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)]
                 hover:border-[#7370ff]/30
                 transition-all duration-300 ease-out
                 cursor-pointer hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative w-full h-[200px] md:h-[220px] bg-[#111] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="p-5 md:p-6 space-y-4">
        {/* Category Badge & Menu */}
        <div className="flex items-center justify-between">
          <span
            className="inline-block px-3 py-1.5 text-xs font-medium rounded-full
                       bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20"
          >
            {project.category}
          </span>
          <button className="text-gray-500 hover:text-white transition-colors p-1">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="4" cy="10" r="1.5" />
              <circle cx="10" cy="10" r="1.5" />
              <circle cx="16" cy="10" r="1.5" />
            </svg>
          </button>
        </div>

        {/* Title */}
        <h3
          className="font-instrument text-lg md:text-xl font-bold text-white tracking-wide
                     group-hover:text-[#7370ff] transition-colors duration-300"
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Full Description */}
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
          {project.fullDescription}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 5).map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-[10px] md:text-xs font-medium rounded-md
                         bg-[#1a1a1a] text-gray-300 border border-[#2a2a2a]
                         hover:bg-[#7370ff]/10 hover:border-[#7370ff]/30 hover:text-[#7370ff]
                         transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
