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
        Score Card
      </span>
      <span className="score-per mb-4 w-full text-center text-2xl text-purple-600 font-bold drop-shadow-xl">
        SCORE {totalPoint}%
      </span>
      <hr className="mb-6 h-px border-0 bg-gray-400 dark:bg-gray-600" />

      <div className="[&>*]:text-lg [&>*]:lg:text-xl">
        <div className="score-row text-purple-600">
          <p className="text-left text-lg">Answers</p>
          <p>True</p>
          <p>False</p>
          <p>Points</p>
        </div>

        <div className="score-row text-green-400">
          <p className="text-left ">General Knowledge</p>
          <p>{correctGeneralAnswersCount}</p>
          <p>{incorrectGeneralAnswersCount}</p>
          <p>+ {Math.round(correctGeneralAnswersCount * (100 / 15))}</p>
        </div>

        <div className="score-row text-pink-500">
          <p className="text-left">Mathematics</p>
          <p>{correctMathAnswersCount}</p>
          <p>{incorrectMathAnswersCount}</p>
          <p>+ {Math.round(correctMathAnswersCount * (100 / 15))}</p>
        </div>
        <div className="score-row text-yellow-500">
          <p className="text-left">Computer Technology</p>
          <p>{correcTechnologyAnswersCount}</p>
          <p>{incorrecTechnologyAnswersCount}</p>
          <p>+ {Math.round(correcTechnologyAnswersCount * (100 / 15))}</p>
        </div>
      </div>
      <hr className="mt-4 mb-3 h-px border-0 bg-gray-400 dark:bg-gray-600" />
      <span className="mr-9 flex justify-between text-lg font-semibold uppercase lg:text-2xl text-red-600">
        Total Points <span>{totalPoint}</span>
      </span>
      {totalPoint >= 60 ? (
        <button
          type="button"
          className="border-button mx-auto mt-6 mb-2 w-fit rounded-xl bg-violet-500 px-4 py-2"
          title="Get Certificate"
        >
          <span className="text uppercase">Get Certificate 🔥</span>
        </button>
      ) : (
        <p className="mt-6 text-center sm:text-lg font-medium uppercase text-pink-400">
          Score at least 60% to get Certificate
        </p>
      )}
    </div>
  );
}
