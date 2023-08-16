import React from "react";
import CardQuizzy from "../card/CardQuizzy";
import {
  BadgeOutlined,
  LaptopMacOutlined,
  MailOutline,
  MessageOutlined,
  Person2Outlined,
  QuizOutlined,
  TitleOutlined,
} from "@mui/icons-material";
import InputField from "../formField/InputField";
import { useNavigate } from "react-router-dom";

export default function HomeMain() {
  const navigate = useNavigate();

  return (
    <div className="home-main">
      <div className="banner">
        <div className="main-banner">
          <div className="btn-start" onClick={() => navigate("/quiz")}>
            Start
          </div>
          <div className="main-banner__title">
            <h1>THE GREATEST</h1>
            <h1>QUIZ COMPETITION</h1>
            <h1>PLATFORM YOU HAVE EVER SEEN!</h1>
          </div>
        </div>
        <div className="main-banner__titleBot">
          <h3>
            " QUIZZES ARE LIKE A MENTAL WORKOUT, EXCEPT YOU DON'T NEED TO BREAK
            A SWEAT! "
          </h3>
        </div>
      </div>
      <div className="stats">
        <div className="plus-item">
          <h1>200+</h1>
          <p>questions</p>
        </div>
        <div className="plus-item">
          <h1>100+</h1>
          <p>quizzies</p>
        </div>
        <div className="plus-item">
          <h1>150+</h1>
          <p>lectures</p>
        </div>
        <div className="plus-item">
          <h1>400+</h1>
          <p>learners</p>
        </div>
      </div>
      <div className="why-quizzy">
        <h1>WHY QUIZZY?</h1>
        <div className="why-quizzy__card">
          <CardQuizzy
            icon={
              <QuizOutlined
                style={{
                  fontSize: "40px",
                  color: "#fff",
                }}
              />
            }
            title={"Wide Range of Topics"}
            content={
              "We provide a diverse selection of quizzes on a wide range of topics. Whatever computer science topics you are looking for, want to improve your general knowledge, or have a particular interest, you can find quizzes that cater to your needs."
            }
          />
          <CardQuizzy
            icon={
              <LaptopMacOutlined
                style={{
                  fontSize: "40px",
                  color: "#fff",
                }}
              />
            }
            title={"Video Content"}
            content={
              "We also provide video content to help you learn topics. As video is an effective way to enhance your learning experience and gain a deeper understanding of topics. Our videos are informative, and easy to follow, allowing you to learn at your own pace."
            }
          />
          <CardQuizzy
            icon={
              <BadgeOutlined
                style={{
                  fontSize: "40px",
                  color: "#fff",
                }}
              />
            }
            title={"Verified Certificate"}
            content={
              "We provide the option to obtain a verified certificate upon completion of a quiz. This certificate validates your knowledge and demonstrates your commitment to learning and self-improvement. This can be used in CVs, resumes to highlight your skills."
            }
          />
        </div>
      </div>
      <div className="contact-us">
        <h1>CONTACT US</h1>
        <div className="contact-us__main">
          <InputField label={"Name"} icon={<Person2Outlined />} />
          <InputField label={"Email"} icon={<MailOutline />} />
          <InputField label={"Subject"} icon={<TitleOutlined />} />
          <InputField label={"Message"} icon={<MessageOutlined />} />
          <div className="send">Send</div>
        </div>
      </div>
    </div>
  );
}
