import React from "react";
import Header from "../components/header/Header";

export default function About() {
  return (
    <div>
      <Header />
      <div className="about-page mx-auto flex w-[85%] flex-col items-center justify-center">
        <h1
          className="pt-24 font-bold uppercase text-5xl"
          style={{ color: "#562970", letterSpacing: "0.25rem" }}
        >
          Về Quizzy chúng tôi
        </h1>
        <div className="text-justify font-medium sm:w-[70%] sm:text-xl">
          <p className="my-6 indent-7">
            Tổ chức WebSter là tổ chức hàng đầu thế giới về Oil-Gas Company.
            Chúng tôi có nhiều chi nhánh trên khắp thế giới. Nó có nhiều trái
            phiếu với các công ty đa quốc gia khác nha. Trên những chặng đường
            đã qua, Tổng Công ty và các đơn vị thành viên đã không ngừng trưởng
            thành. “Mục tiêu lớn, đòi hỏi những nỗ lực lớn” là mục tiêu toàn thể
            tập thể lãnh đạo Tổ chức WebSter đều thấu hiểu. Với nền tảng vững
            chắc đã tạo dựng trên chặng đường phát triển và sự quyết tâm cực kỳ
            cao quyết tâm tiếp tục khắc ghi những dấu ấn trên chặng đường mới,
            góp phần vào sự phát triển chung của của nề kinh tế chung toàn cầu.
          </p>
          <p className="my-6 indent-7">
            Quy mô Tập đoàn:
            <div>
              <p className="my-2">
                - Tổng tài sản hợp nhất đến nay là 500 tỷ USD
              </p>
              <p className="my-2">
                - Nguồn vốn chủ sở hữu hợp nhất đến nay là 300 tỷ USD
              </p>
              <p className="my-2">
                <p className="text-left">
                  - Đội ngũ gần 600.000 thành viên của WebSter với năng lực
                  chuyên môn cao cùng tinh thần trách nhiệm, tính kỷ luật, sự
                  chuyên nghiệp và khả năng sáng tạo không ngừng, đã xây dựng
                  nên một hệ thống công nghiệp dầu khí hoàn chỉnh, đồng bộ chuỗi
                  khép kín các hoạt động từ tìm kiếm, thăm dò, khai thác tới tồn
                  trữ, vận chuyển và chế biến với 5 lĩnh vực:
                </p>
                <ul style={{ listStyle: "disc" }} className="ml-12 mt-2">
                  <li className="my-2">
                    Tìm kiếm, thăm dò và khai thác dầu khí
                  </li>
                  <li className="my-1">Công nghiệp khí</li>
                  <li className="my-1">Chế biến dầu khí</li>
                  <li className="my-1">
                    Công nghiệp điện và năng lượng tái tạo
                  </li>
                  <li className="my-1">
                    Dịch vụ kỹ thuật Dầu khí chất lượng cao
                  </li>
                </ul>
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
