import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";

export default function SubjectOfQuiz() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("myQuizApp"));

  const handleStartQuiz = () => {
    if (user) {
      navigate("/quiz/game");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Header />
      <div className="subject-of-quiz w-full pt-[100px]">
        <div className="subject-of-quiz__title w-[80%] m-auto text-[18px]">
          <p className="my-3 indent-7">
            Chào mừng bạn đã đến với bài test tuyển dụng của tập đòa chúng tôi
          </p>
          <p className="my-3 indent-7">
            Để ứng tuyển vào tập đoàn bạn cần phải hoàn thành bài test dưới đây.
            Bài test bao gồm 3 phần Kiến thức chung – Toán học - Công nghệ máy
            tính. Bạn phải hoàn thành lần lượt tất cả các câu hỏi trong từng bộ
            chủ đề theo hướng dẫn sau đây của chúng tôi
          </p>
          <p className="my-3 indent-7">
            <span className="text-red-600 font-semibold">Lưu ý:</span> “Không
            được thoát ra khi đã bắt đầu làm bài nếu bạn thoát bài thi sẽ không
            được chấp nhận, bài thi bao gồm 15 câu cho mỗi chủ đề câu hỏi có cả
            mức độ dễ và khó . Thời gian làm bài là 30 phút hết thời gian bai
            thi của bạn sẽ tự động được tính điểm, bạn có thể hoàn thành sớm bài
            thi khi trả lời hết bộ câu hỏi của 3 chủ đề chúng tôi đưa ra và nhấn
            "Nộp bài" để nộp và xem điểm của bản thân. Chúng tôi sẽ căn cứ vào
            số điểm trong bài thi của bạn để xem xét hồ sơ ứng tuyển.”
          </p>
          <p className="my-3 indent-7">
            Các bạn hãy làm theo hướng dẫn dưới đây để bắt đầu làm bài:
            <ul style={{ listStyle: "disc" }} className="mt-2 ml-12">
              <li>Chọn vào mục kiến thức chung ( bắt buộc ) </li>
              <li>Trả lời hết 5 câu hỏi của chủ đề kiến thức chung </li>
              <li>Sau đó nhấn "Nộp bài" </li>
              <li>
                Thông báo sẽ hiện lên màn hình bạn hãy nhấn "OK" để chuyển qua
                chủ đề tiếp theo là Toán học
              </li>
              <li>
                Tương tự khi làm xong 5 câu của chủ đề toán học bạn hãy nhấn
                "Nộp bài" và chọn ok để qua chủ đề Công nghệ máy tính
              </li>
              <li>
                Sau khi hoàn thành bộ 3 chủ đề nói trên hãy nhấn "Nộp bài" bạn
                sẽ thấy được số điểm của bạn
              </li>
            </ul>
          </p>
        </div>
        <Grid
          container
          spacing={3}
          pb={6}
          sx={{
            maxWidth: "80%",
            margin: "0 auto",
          }}
        >
          {/* card-tab */}
          <Grid item xs={12} md={6} lg={4}>
            <Button
              sx={{
                border: "1px solid #334155",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
              onClick={handleStartQuiz}
            >
              <Card sx={{ minHeight: 250, minWidth: 360 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="https://vietit.vn/media/upload/kien_thuc_web/7-kien-thuc-hinh-anh-1.png"
                    alt="general_knowledge"
                    sx={{ maxHeight: 150, maxWidth: "100%" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      Kiến thức chung
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        border: "1px solid #acacac",
                        borderRadius: "5px",
                        padding: "5px",
                        marginTop: "10px",
                      }}
                    >
                      <Typography variant="body1">5 câu hỏi</Typography>
                      <Typography variant="body1">33 điểm</Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Button
              sx={{
                border: "1px solid #334155",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Card sx={{ minHeight: 250, minWidth: 360 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="https://giasudaykemtainha.vn/uploads/posts/Toan-hoc-la-gi-Nhung-cach-hoc-gioi-Toan.jpg"
                    alt="mathematics"
                    sx={{ maxHeight: 150, maxWidth: "100%" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      Toán học
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        border: "1px solid #acacac",
                        borderRadius: "5px",
                        padding: "5px",
                        marginTop: "10px",
                      }}
                    >
                      <Typography variant="body1">5 câu hỏi</Typography>
                      <Typography variant="body1">33 điểm</Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Button
              sx={{
                border: "1px solid #334155",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Card sx={{ minHeight: 250, minWidth: 360 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="https://aptechbmt.edu.vn/uploads/news/2019_07/hoc-lap-trinh.jpg"
                    alt="computer_tech"
                    sx={{ maxHeight: 150, maxWidth: "100%" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      Công nghệ máy tính
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        border: "1px solid #acacac",
                        borderRadius: "5px",
                        padding: "5px",
                        marginTop: "10px",
                      }}
                    >
                      <Typography variant="body1">5 câu hỏi</Typography>
                      <Typography variant="body1">34 điểm</Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
