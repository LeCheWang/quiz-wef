import React from "react";
import Header from "../components/header/Header";

const aboutPageData = [
  `Welcome to Quizzy, the premier destination for free coding quizzes! Our goal is to provide you with a fun and challenging way to test your coding knowledge and skills. We offer a wide range of quizzes covering various programming languages, algorithms, data structures, and more. `,

  `At Quizzy, we believe that learning to code should be accessible to everyone, which is why we offer all of our quizzes for free. Whether you're a beginner or an experienced programmer, our quizzes are designed to help you improve your skills and stay up-to-date with the latest trends in the coding domain.`,

  `We offer a variety of quizzes that are designed to challenge you at every level. From multiple-choice questions to coding challenges, our quizzes are designed to test your knowledge in a fun and engaging way. Quizzy provide immediate feedback on users answers, helping them to learn and improve their knowledge. For that reason Quizzy can be used for educational purposes or just for entertainment. And most interestingly all of these features are accessible for free. In addition to providing free coding quizzes, Quizzy also offers a wealth of resources for coders of all levels. Our website features helpful tutorials, tips and tricks, and guides to help you improve your coding skills. We believe that everyone should have access to quality coding education, regardless of their experience or financial situation.`,

  `Our team of expert coders and educators work tirelessly to create and curate high-quality quizzes and resources that are both challenging and informative. Our quizzes are updated regularly to reflect the latest trends and technologies in the coding domain, so you can be sure that you're learning the most up-to-date information.`,

  `Thank you for choosing Quizzy as your go-to source for free coding quizzes and resources. We hope you enjoy learning and growing with us!`,
];

export default function About() {
  return (
    <div>
      <Header />
      <div className="about-page mx-auto flex w-[85%] flex-col items-center justify-center">
        <h1
          className="pt-24 font-bold uppercase text-5xl"
          style={{ color: "#562970", letterSpacing: "0.25rem" }}
        >
          About Quizzy
        </h1>

        <div className="text-justify font-medium sm:w-[70%] sm:text-xl">
          {aboutPageData.map((para, index2) => (
            <p className="my-6 indent-7" key={index2}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
