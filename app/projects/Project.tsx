"use client";

import ProjectsWallpaper from "@/public/project-wallpaper.jpg";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Steps } from "antd";

import { useAppSelector } from "@/redux/store";

export default function Projects() {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);
  return (
    <>
      <section className="relative grid h-[calc(60vh-8rem)] min-h-[350px] w-full place-items-center object-cover">
        <Image
          src={ProjectsWallpaper}
          alt="Projects Wallpaper"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[2] opacity-75"></div>
        <div className="container z-[3] flex h-full items-center text-center justify-center flex-col text-primaryText px-4">
          <h1 className="md:text-5xl text-4xl lg:text-7xl font-semibold">
            My Projects
          </h1>
        </div>
        <span className="font-semibold absolute z-[3] text-xl text-primaryText lg:left-0 xl:left-0 xl:ml-8 2xl:left-0 2xl:ml-8 lg:ml-8 bottom-5">
          Home {">"} Projects
        </span>
      </section>
      <section
        id="products"
        className="bg-secondaryBg flex justify-center items-center py-5 px-10 my-10"
      >
        <div className="max-w-4xl w-full">
          <Steps
            className="flex justify-center items-center"
            direction="vertical"
            status="process"
            items={[
              {
                title: (
                  <span
                    className={`font-semibold ${
                      theme ? "text-black" : "text-white"
                    }`}
                  >
                    EduCareer
                  </span>
                ),
                status: "finish",
                description: (
                  <p className={`${theme ? "text-black" : "text-white"}`}>
                    My Final Year Project, a website made in MERN Stack. A
                    platform where teachers can register and then offer courses
                    to students. The main features of the system are PDF to Quiz
                    generator, Career Recommender, and a ChatBot as well{" "}
                    <Link href="https://github.com/ahmadmahmood-96/EduCareer">
                      <ExternalLink className="inline-block ml-2" />
                    </Link>
                  </p>
                ),
              },
              {
                title: (
                  <span
                    className={`font-semibold ${
                      theme ? "text-black" : "text-white"
                    }`}
                  >
                    Cloned a Website, with complete responsiveness
                  </span>
                ),
                status: "finish",
                description: (
                  <p className={`${theme ? "text-black" : "text-white"}`}>
                    A website I developed as a task during my Internship at
                    Brantum as a Front-end Web Intern. Developed this website
                    using HTML5, CSS3, JavaScript, and Bootstrap
                    <Link href="/">
                      <ExternalLink className="inline-block ml-2" />
                    </Link>
                  </p>
                ),
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
