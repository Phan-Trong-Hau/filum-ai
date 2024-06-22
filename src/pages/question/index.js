import { useContext } from "react";
import data from "../../data/assessment.json";
import Popup from "../../components/Popup";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../../context/UserDataProvider";

const Questions = ({ children, ...props }) => {
  const {
    setTotalScore,
    answers,
    setAnswers,
    indexQuestion,
    setIndexQuestion,
  } = useContext(UserDataContext);
  const navigate = useNavigate();

  const questions = data.questions;
  const isBoundaryValueLeft = indexQuestion === 0;
  const isBoundaryValueRight = indexQuestion === questions.length - 1;

  const handleSetAnswers = (e) => {
    const newAnswer = {
      questionId: data.questions[indexQuestion].id,
      scoreAnswer: Number(e.target.value),
    };
    if (answers.find((answer) => answer.questionId === newAnswer.questionId)) {
      const filterAnswers = answers.filter(
        (answer) => answer.questionId !== newAnswer.questionId
      );
      setAnswers([...filterAnswers, newAnswer]);
    } else setAnswers([...answers, newAnswer]);
  };

  const handleChangeQuestion = (e) => {
    if (e.target.innerText === "Quay lại") {
      setIndexQuestion(indexQuestion - 1);
    } else if (e.target.innerText === "Tiếp theo") {
      setIndexQuestion(indexQuestion + 1);
    } else if (e.target.innerText === "Kết thúc") {
      const result = answers.reduce(
        (total, answer) => total + answer.scoreAnswer,
        0
      );
      setTotalScore(result);
      navigate("/result");
    }
  };

  return (
    <div className="question" {...props}>
      <Popup>
        <div className="question-container">
          <div className="title">
            <h3>{`Câu hỏi ${indexQuestion + 1}/${questions.length}`}</h3>
          </div>
          <div className="question">
            <p>{questions[indexQuestion].title}</p>
            <div className="options">
              {questions[indexQuestion].options?.map((option) => (
                <button
                  key={option.id}
                  className={
                    answers.find(
                      (answer) =>
                        answer.questionId === questions[indexQuestion].id &&
                        answer.scoreAnswer === option.score
                    )
                      ? "chose"
                      : ""
                  }
                  onClick={handleSetAnswers}
                  value={option.score}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
          <div className="actions">
            <button
              onClick={handleChangeQuestion}
              disabled={isBoundaryValueLeft}
            >
              Quay lại
            </button>
            <button onClick={handleChangeQuestion}>
              {isBoundaryValueRight ? "Kết thúc" : "Tiếp theo"}
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
};
export default Questions;
