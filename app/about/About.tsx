"use client";

import Image from "next/image";
import AboutBanner1 from "@/public/about1-banner.png";
import { Download } from "lucide-react";
import { message } from "antd";
import { useAppSelector } from "@/redux/store";

export default function About() {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);

  return (
    <>
      <main className="relative grid h-[calc(60vh-8rem)] min-h-[400px] w-full place-items-center object-cover">
        <Image
          src={AboutBanner1}
          alt="About Banner"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#05122380] z-[2] opacity-95"></div>
        <div className="z-[3] flex items-center text-center text-primaryText">
          <h1 className="text-4xl lg:text-6xl font-bold">ABOUT ME</h1>
        </div>
        <span className="font-semibold absolute z-[3] text-xl text-primaryText lg:left-0 xl:left-0 xl:ml-8 2xl:left-0 2xl:ml-8 lg:ml-8 bottom-5">
          Home {">"} About Me
        </span>
      </main>
      <section className="">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:px-16 px-10 gap-y-5 gap-x-9 my-10">
          <div className="flex flex-col justify-center items-center lg:items-start lg:w-[700px]">
            <h2 className="font-bold text-4xl mb-4 text-center text-primary lg:text-left">
              <p className="my-1">Something About</p>
              <p>
                <span className="text-teal">My Career and Experience</span>
              </p>
            </h2>
            <p className="text-[#656262] md:text-md lg:text-left text-center">
              Me, Ahmad Mahmood a recent graduate from Comsats University
              Islamabad, Islamabad Campus. Finished my Bachelor&apos;s of
              Software Engineering with a CGPA of 3.32. My major courses which I
              studied were Web Development using MERN Stack, Mobile Application
              Development using React Native, Software Quality Engineering and
              Software Testing in which I practiced working with JIRA, Cypress,
              Selenium and did both automation and manual testing, Topics in
              Software Engineering Part 1 in which I studied Angular and React
              JS. Then Topics in Software Engineering Part 2 in which I worked
              with Git, AWS in which I learnt working with EC2 machines, S3
              Buckets, Jenkins, Docker and Kubernetes. <br />
              Right now I am working as a Front End Web Intern remotely at
              Brantum Technologies (Rawalpindi, Pakistan).
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center my-10">
        <div
          className={`flex flex-col items-center ${
            theme ? "shadow-t-lg" : "shadow-custom-white"
          } rounded-lg p-6 w-[250px] sm:w-[400px] md:w-[600px] lg:w-[700px]`}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Download My CV
          </h2>
          <p className="text-center text-[#656262] mb-6">
            Get a detailed look at my career journey, skills, and projects.
          </p>
          <a
            className="bg-teal hover:bg-[#0e6d63] text-white font-semibold py-3 px-6 rounded inline-flex items-center transition-colors duration-300"
            onClick={() => message.success("CV Downloaded Successfully 🎉")}
            href="/Ahmad's Resume.pdf"
            download="Ahmad's Resume.pdf"
          >
            <Download className="mr-2" />
            Download CV
          </a>
        </div>
      </section>
    </>
  );
}
