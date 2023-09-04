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
            Bắt đầu
          </div>
        </div>
      </div>
      <div className="main-banner__titleBot">
        <div className="">
          <h1>THE GREATEST</h1>
          <h1>QUIZ COMPETITION</h1>
          <h1>PLATFORM YOU HAVE EVER SEEN!</h1>
        </div>
        <h3>
          " QUIZZES ARE LIKE A MENTAL WORKOUT, EXCEPT YOU DON'T NEED TO BREAK A
          SWEAT! "
        </h3>
      </div>
      <div className="stats">
        <div className="plus-item">
          <h1>200+</h1>
          <p>câu hỏi</p>
        </div>
        <div className="plus-item">
          <h1>100+</h1>
          <p>câu đố</p>
        </div>
        <div className="plus-item">
          <h1>150+</h1>
          <p>bài học</p>
        </div>
        <div className="plus-item">
          <h1>400+</h1>
          <p>người học</p>
        </div>
      </div>
      <div className="why-quizzy">
        <h1>Tại sao chọn QUIZZY?</h1>
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
            title={"Nhiều chủ để"}
            content={
              "Chúng tôi cung cấp nhiều lựa chọn câu hỏi đa dạng về nhiều chủ đề. Bất kể chủ đề khoa học máy tính nào bạn đang tìm kiếm, muốn nâng cao kiến thức chung hoặc có mối quan tâm đặc biệt, bạn đều có thể tìm thấy các câu đố đáp ứng nhu cầu của mình."
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
            title={"Nội dung video"}
            content={
              "Chúng tôi cũng cung cấp nội dung video để giúp bạn tìm hiểu các chủ đề. Vì video là một cách hiệu quả để nâng cao trải nghiệm học tập của bạn và hiểu sâu hơn về các chủ đề. Video của chúng tôi chứa nhiều thông tin và dễ theo dõi, cho phép bạn học theo tốc độ của riêng mình. "
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
            title={"Chứng chỉ được xác minh"}
            content={
              "Chúng tôi cung cấp tùy chọn nhận chứng chỉ đã được xác minh sau khi hoàn thành bài kiểm tra. Chứng chỉ này xác nhận kiến thức của bạn và thể hiện cam kết học tập và hoàn thiện bản thân của bạn. Chứng chỉ này có thể được sử dụng trong CV, sơ yếu lý lịch để nêu bật các kỹ năng của bạn."
            }
          />
        </div>
        <div className="see-more" onClick={() => navigate("/about")}>
          Xem thêm...
        </div>
      </div>
      <div className="contact-us">
        <h1>Liện hệ với chúng tôi</h1>
        <div className="contact-us__main">
          <InputField label={"Họ tên"} icon={<Person2Outlined />} />
          <InputField label={"Email"} icon={<MailOutline />} />
          <InputField label={"Chủ đề"} icon={<TitleOutlined />} />
          <InputField label={"Nội dung"} icon={<MessageOutlined />} />
          <div className="send">Gửi</div>
        </div>
      </div>
    </div>
  );
}
