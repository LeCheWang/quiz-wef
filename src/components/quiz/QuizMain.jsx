import * as React from "react";
import { useState, useCallback, useReducer, useEffect } from "react";
import ProgressBar from "../progressbar/ProgressBar";
import AnswerBox from "../answerBox/AnswerBox";
import _ from "lodash";
import axios from "axios";
import { Box, Button, CircularProgress } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "quiz": {
      const qnaSet = _.cloneDeep(action.value);
      qnaSet.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return qnaSet;
    }
    case "answer": {
      const question = _.cloneDeep(state);
      question[action.questionID].options[action.optionIndex].checked =
        action.value;
      return question;
    }

    default:
      return state;
  }
};

export default function QuizMain() {
  // get user
  const user = JSON.parse(localStorage.getItem("myQuizApp"));
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState([]);
  const [listQuiz, dispatch] = useReducer(reducer, initialState);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://raw.githubusercontent.com/minhphuong2001/DATN_MobileShop_Client/master/src/assets/fake-data/quizQuestion.json"
      );
      setQuiz([...res.data?.questions]);
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    if (listQuiz?.length === 0) {
      setTopics("general_knowledge");
    }
  }, [listQuiz]);

  useEffect(() => {
    dispatch({
      type: "quiz",
      value: quiz,
    });
  }, [quiz]);

  const handleAnswerChange = useCallback(
    (e, index) => {
      dispatch({
        type: "answer",
        questionID: currentQuestion,
        optionIndex: index,
        value: e.target.checked,
      });
    },
    [dispatch, currentQuestion]
  );

  // handle previous ques
  const previousQuestion = useCallback(() => {
    if (currentQuestion >= 1 && currentQuestion <= listQuiz?.length) {
      setCurrentQuestion((curr) => curr - 1);
    }
    if (listQuiz[currentQuestion - 1]?.topic === "general_knowledge") {
      setTopics("general_knowledge");
    } else if (listQuiz[currentQuestion - 1]?.topic === "mathematics") {
      setTopics("mathematics");
    } else {
      setTopics("computer_technology");
    }
  }, [currentQuestion, listQuiz]);

  // handle next ques
  const nextQuestion = useCallback(() => {
    if (currentQuestion < listQuiz?.length - 1) {
      setCurrentQuestion((curr) => curr + 1);
    }
    if (listQuiz[currentQuestion + 1]?.topic === "general_knowledge") {
      setTopics("general_knowledge");
    } else if (listQuiz[currentQuestion + 1]?.topic === "mathematics") {
      setTopics("mathematics");
    } else {
      setTopics("computer_technology");
    }
  }, [currentQuestion, listQuiz]);

  // progress percentage
  const progressPercentage =
    listQuiz?.length > 0 ? ((currentQuestion + 1) * 100) / listQuiz?.length : 0;

  // submit quiz and store result
  const submitQuiz = useCallback(async () => {
    function getResult() {
      let correctGeneralAnswersCount = 0;
      let incorrectGeneralAnswersCount = 0;
      let correctMathAnswersCount = 0;
      let incorrectMathAnswersCount = 0;
      let correcTechnologyAnswersCount = 0;
      let incorrecTechnologyAnswersCount = 0;

      listQuiz?.forEach((question, index1) => {
        const correctGeneralIndexes = [];
        const checkedGeneralIndexes = [];
        const correctMathIndexes = [];
        const checkedMathIndexes = [];
        const correctTechnologyIndexes = [];
        const checkedTechnologyIndexes = [];

        if (question.topic === "general_knowledge") {
          question.options.forEach((option, index2) => {
            if (option.correct && option) correctGeneralIndexes.push(index2);
            if (option.checked) checkedGeneralIndexes.push(index2);
          });
        } else if (question.topic === "mathematics") {
          question.options.forEach((option, index2) => {
            if (option.correct && option) correctMathIndexes.push(index2);
            if (option.checked) checkedMathIndexes.push(index2);
          });
        } else {
          question.options.forEach((option, index2) => {
            if (option.correct && option) correctTechnologyIndexes.push(index2);
            if (option.checked) checkedTechnologyIndexes.push(index2);
          });
        }

        if (question.topic === "general_knowledge") {
          if (_.isEqual(correctGeneralIndexes, checkedGeneralIndexes)) {
            correctGeneralAnswersCount += 1;
          } else {
            incorrectGeneralAnswersCount += 1;
          }
        } else if (question.topic === "mathematics") {
          if (_.isEqual(correctMathIndexes, checkedMathIndexes)) {
            correctMathAnswersCount += 1;
          } else {
            incorrectMathAnswersCount += 1;
          }
        } else {
          if (_.isEqual(correctTechnologyIndexes, checkedTechnologyIndexes)) {
            correcTechnologyAnswersCount += 1;
          } else {
            incorrecTechnologyAnswersCount += 1;
          }
        }
      });

      const totalPoint = Math.floor(
        (correctGeneralAnswersCount +
          correctMathAnswersCount +
          correcTechnologyAnswersCount) *
          (100 / listQuiz?.length)
      );

      return [
        correctGeneralAnswersCount,
        incorrectGeneralAnswersCount,
        correctMathAnswersCount,
        incorrectMathAnswersCount,
        correcTechnologyAnswersCount,
        incorrecTechnologyAnswersCount,
        totalPoint,
      ];
    }

    const [
      correctGeneralAnswersCount,
      incorrectGeneralAnswersCount,
      correctMathAnswersCount,
      incorrectMathAnswersCount,
      correcTechnologyAnswersCount,
      incorrecTechnologyAnswersCount,
      totalPoint,
    ] = getResult();

    const dataResult = {
      correctGeneralAnswersCount: correctGeneralAnswersCount,
      incorrectGeneralAnswersCount: incorrectGeneralAnswersCount,
      correctMathAnswersCount: correctMathAnswersCount,
      incorrectMathAnswersCount: incorrectMathAnswersCount,
      correcTechnologyAnswersCount: correcTechnologyAnswersCount,
      incorrecTechnologyAnswersCount: incorrecTechnologyAnswersCount,
      totalPoint,
      listQuiz: { ...listQuiz },
    };

    navigate(`/result`, { state: { dataResult } });
  }, [listQuiz, navigate]);

  return (
    <>
      {user ? (
        <div className="quiz-main">
          {/* tab */}
          <div className="quiz-main__top">
            <Button
              variant="contained"
              color="secondary"
              disabled={topics !== "general_knowledge"}
            >
              General Knowledge
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disabled={topics !== "mathematics"}
              sx={{ mx: 2 }}
            >
              Mathematics
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disabled={topics !== "computer_technology"}
            >
              Computer Technology
            </Button>
          </div>

          {/* answer box */}
          {loading ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size={40} color="secondary" />
            </Box>
          ) : (
            listQuiz?.length > 0 && (
              <div className="quiz-main__mid frame-BG rounded-md">
                <div className="flex flex-col items-center justify-center text-xl font-bold text-darkText dark:text-lightText sm:text-3xl">
                  Q. {listQuiz[currentQuestion]?.title}
                </div>
                <hr className="mt-3 mb-8 h-px border-0 bg-gray-400 dark:bg-gray-600" />

                <AnswerBox
                  options={listQuiz[currentQuestion]?.options}
                  handleChange={handleAnswerChange}
                />
              </div>
            )
          )}

          {/* progress-bar */}
          <div className="quiz-main__bot">
            <ProgressBar
              nextQ={nextQuestion}
              prevQ={previousQuestion}
              progress={progressPercentage}
              submit={submitQuiz}
            />
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}
