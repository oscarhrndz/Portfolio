"use client"; // Add this directive at the top

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import LoadingIndicator from "@/components/LoadingIndicator"; // Importing the LoadingIndicator component

interface Skill {
  name: string;
  Image: string;
  width: number;
  height: number;
}

const shuffleArray = (array: Skill[]): Skill[] => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const Page = () => {
  const [loading, setLoading] = useState(true);

  const shuffledSkills1 = shuffleArray([...SkillData]);
  const shuffledSkills2 = shuffleArray([...SkillData]);

  useEffect(() => {
    // Simulate the loading state change after the component has mounted
    setLoading(false);
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url(/bg/bg_skills.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: '30% 80%',
      }}
      className="background-skill h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center relative"
    >
      {/* Dark overlay to decrease brightness */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Show the loading screen while the page is loading */}
      {loading ? (
        <div className="flex items-center justify-center h-full z-10">
          <LoadingIndicator /> {/* You can use your custom loading indicator */}
        </div>
      ) : (
        <div className="flex flex-col gap-28 max-w-[80%] text-center items-center z-10 fade-in">
          <div className="flex flex-col items-center gap-4 pt-5 fade-in">
            <h1 className="font-semibold text-white text-[50px] fade-in">
              Skills{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABAB5] to-[#25eb85]">
                {" "}
                &{" "}
              </span>
              Technologies
            </h1>
          </div>

          {/* First Swiper */}
          <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="width-logos max-w-[80%] fade-in"
            spaceBetween={3}
          >
            {shuffledSkills1.map((skill: Skill, index: number) => (
              <SwiperSlide key={index} className="fade-in">
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Second Swiper */}
          <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="width-logos max-w-[80%] fade-in"
            spaceBetween={3}
          >
            {shuffledSkills2.map((skill: Skill, index: number) => (
              <SwiperSlide key={index} className="fade-in">
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Page;
