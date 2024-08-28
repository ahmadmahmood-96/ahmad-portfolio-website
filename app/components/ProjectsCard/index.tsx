"use client";
import Link from "next/link";
import Tag from "../Tag";
import { Github, ExternalLink } from "lucide-react";
import { useAppSelector } from "@/redux/store";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  colors: string[];
  websiteLink?: string;
  githubLink?: string;
  duration: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  colors,
  websiteLink,
  githubLink,
  duration,
}) => {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);
  return (
    <>
      <div
        className={`flex flex-row ${
          theme ? "hover:shadow-custom-lg" : "hover:shadow-custom-white"
        } rounded-lg my-5`}
      >
        <div
          className={`bg-${
            colors[
              Math.floor(Math.random() * (colors.length - 1 - (0 + 1))) + 0
            ]
          } px-8 flex items-center rounded-s-lg`}
        >
          <span className="font-semibold text-white text-xl">{title}</span>
        </div>
        <div
          className={`flex-grow p-4 ${
            theme ? "bg-slate-100" : ""
          }  rounded-e-lg`}
        >
          <div className="flex flex-col space-y-1">
            <span className="">{description}</span>
            <div className="flex flex-row items-center flex-wrap">
              {/* <span className="mr-2 font-light">Technologies Used:</span> */}
              {technologies.map((technology: string, index: number) => (
                <Tag key={index} title={technology} color={colors[index]} />
              ))}
            </div>
            {githubLink && (
              <span className="flex flex-row items-center text-sm pt-1">
                View the source code here
                <Link
                  href={githubLink || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <Github size={20} />
                </Link>
              </span>
            )}
            {websiteLink && (
              <span className="flex flex-row items-center text-sm pt-1">
                View the website from here
                <Link
                  href={websiteLink || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <ExternalLink size={20} />
                </Link>
              </span>
            )}
            <span className="text-sm text-blue text-right">{duration}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
