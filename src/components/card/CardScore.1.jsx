import React from "react";

export default function CardScore({
  correctGeneralAnswersCount,
  incorrectGeneralAnswersCount,
  correctMathAnswersCount,
  incorrectMathAnswersCount,
  correcTechnologyAnswersCount,
  incorrecTechnologyAnswersCount,
  totalPoint,
}) {
  return (
    <div className="score-card frame-BG flex flex-col rounded-xl lg:w-[500px]">
      <span className="score-card-heading mb-2 w-full text-center text-4xl font-semibold uppercase tracking-wider text-darkText drop-shadow-xl dark:text-dullWhite">
        Thẻ Điểm
      </span>
      <span className="score-per mb-4 w-full text-center text-2xl text-purple-600 font-bold drop-shadow-xl">
        Điểm {totalPoint}%
      </span>
      <hr className="mb-6 h-px border-0 bg-gray-400 dark:bg-gray-600" />

      <div className="[&>*]:text-lg [&>*]:lg:text-2xl">
        <div className="score-row text-purple-600">
          <p className="text-left">Chủ đề</p>
          <p>Đúng</p>
          <p>Sai</p>
          <p>Điểm</p>
        </div>

        <div className="score-row">
          <p className="text-left text-xl">Kiến thức chung</p>
          <p>{correctGeneralAnswersCount}</p>
          <p>{incorrectGeneralAnswersCount}</p>
          <p>+ {correctGeneralAnswersCount * (100 / 15).toFixed(2)}</p>
        </div>

        <div className="score-row">
          <p className="text-left text-xl">Toán học</p>
          <p>{correctMathAnswersCount}</p>
          <p>{incorrectMathAnswersCount}</p>
          <p>+ {(correctMathAnswersCount * (100 / 15)).toFixed(2)}</p>
        </div>
        <div className="score-row">
          <p className="text-left text-xl">Công nghệ máy tính</p>
          <p>{correcTechnologyAnswersCount}</p>
          <p>{incorrecTechnologyAnswersCount}</p>
          <p>+ {(correcTechnologyAnswersCount * (100 / 15)).toFixed(2)}</p>
        </div>
      </div>
      <hr className="mt-4 mb-3 h-px border-0 bg-gray-400 dark:bg-gray-600" />
      <span className="mr-9 flex justify-between text-lg font-semibold uppercase lg:text-2xl text-red-600">
        Tổng điểm <span>{totalPoint}</span>
      </span>
      {totalPoint >= 60 ? (
        <button
          type="button"
          className="border-button mx-auto mt-6 mb-2 w-fit rounded-xl bg-violet-500 px-4 py-2"
          title="Get Certificate"
        >
          <span className="text uppercase">Nhận chứng chỉ 🔥</span>
        </button>
      ) : (
        <p className="mt-6 text-center sm:text-lg font-medium uppercase text-pink-400">
          Trả lời đúng ít nhất 60% để nhận chứng chỉ
        </p>
      )}
    </div>
  );
}
