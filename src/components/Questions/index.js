import { useState } from "react";
import data from "../../data/assessment.json";
import Popup from "../Popup";
import Result from "../Result";

const Questions = ({ children, ...props }) => {
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [flagResult, setFlagResult] = useState(false);
  const [flagQuestion, setFlagQuestion] = useState(false);
  const [flagStart, setFlagStart] = useState(true);

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
      setFlagResult(true);
      setFlagQuestion(false);
    }
  };

  const handleStartButton = () => {
    setFlagQuestion(true);
    setFlagStart(false);
  };

  return (
    <>
      {flagStart && (
        <div className="question" {...props}>
          <Popup>
            <div className="question-container">
              <div className="title">
                <h3>Hướng dẫn trả lời</h3>
              </div>
              <div className="instruct">
                <div className="instruct-title">
                  Hãy dựa vào hướng dẫn sau đây để trả lời các câu hỏi:
                </div>
                <ul className="instruct-list">
                  <li className="instruct-item">
                    Chọn "Có": Nếu câu đó phản ánh hiện trạng đang có và được
                    thực hiện một cách nhất quán (ít nhất 80% thời gian)
                  </li>
                  <li className="instruct-item">
                    Chọn "Không có": nếu hoàn toàn chưa thực hiện
                  </li>
                  <li className="instruct-item">
                    Chọn "Không rõ vấn đề này": Nếu chưa chắc chắn đã thực hiện
                    hay chưa
                  </li>
                </ul>
              </div>
              <div className="actions">
                <button onClick={handleStartButton}>Bắt đầu</button>
              </div>
            </div>
          </Popup>
        </div>
      )}
      {flagQuestion && (
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
      )}
      {flagResult && <Result totalScore={totalScore} />}
    </>
  );
};
export default Questions;
