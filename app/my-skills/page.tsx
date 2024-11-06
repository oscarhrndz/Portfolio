"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

// Define the structure for a skill
interface Skill {
  name: string;
  Image: string;
  width: number;
  height: number;
}

// Helper function to shuffle an array of Skill objects
const shuffleArray = (array: Skill[]): Skill[] => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const Page = () => {
  const shuffledSkills1 = shuffleArray([...SkillData]);
  const shuffledSkills2 = shuffleArray([...SkillData]);

  return (
    <div
      style={{
        backgroundImage: 'url(/bg/bg_skills.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: '30% 70%',
      }}
      className="background-skill h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4 pt-5">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
        </div>

        {/* First Swiper with shuffled images */}
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="width-logos max-w-[80%]"
          spaceBetween={3} // Adds spacing between slides
        >
          {shuffledSkills1.map((skill: Skill, index: number) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Swiper with a differently shuffled set */}
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
          className="width-logos max-w-[80%]"
          spaceBetween={3} // Adds spacing between slides
        >
          {shuffledSkills2.map((skill: Skill, index: number) => (
            <SwiperSlide key={index}>
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

      
    </div>
  );
};

export default Page;
