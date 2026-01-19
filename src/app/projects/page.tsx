"use client";

import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden py-20">
      {/* Title */}
      <FadeIn direction="up" delay={0}>
        <div className="flex justify-center items-center mt-[100px] mb-[60px]">
          <h1 className="font-instrument font-medium text-[48px] md:text-[72px] leading-[72px] tracking-[-3.6px] bg-clip-text text-transparent bg-[linear-gradient(117.11deg,#9C99FF_25.56%,#FFFFFF_30.53%,#FFFFFF_47.75%,#9C99FF_73.19%,#9C99FF_82.2%)]">
            OUR PROJECTS
          </h1>
        </div>
      </FadeIn>

      {/* Projects 3x3 Grid */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 0.1} className="h-full">
              {/* Project Card */}
              <div
                className="group bg-[#0a0a0a] rounded-[14px] border border-[#1a1a1a] overflow-hidden
                           shadow-[0px_0px_0px_4px_rgba(115,112,255,0.15)]
                           hover:shadow-[0px_0px_0px_8px_rgba(115,112,255,0.3)]
                           hover:border-[#7370ff]/30
                           transition-all duration-300 ease-out
                           cursor-pointer hover:-translate-y-1
                           flex flex-col h-full"
              >
                {/* Image Container */}
                <div 
                  className="relative w-full h-[240px] bg-[#111] overflow-hidden"
                  style={{ backgroundColor: project.backgroundColor || '#111' }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`${project.objectFit === 'contain' ? 'object-contain' : 'object-cover'} object-center transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content Container */}
                <div className="p-5 md:p-6 space-y-4 flex flex-col flex-1">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-block px-3 py-1.5 text-xs font-medium rounded-full
                                 bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20"
                    >
                      {project.category}
                    </span>
                    {project.link && (
                      <a href={project.link} className="text-gray-500 hover:text-white transition-colors p-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-instrument text-lg md:text-xl font-bold text-white tracking-wide
                               group-hover:text-[#7370ff] transition-colors duration-300"
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Full Description */}
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">
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
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
