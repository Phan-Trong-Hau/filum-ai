import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup";

const Instruction = ({ children, ...props }) => {
  const navigate = useNavigate();

  const handleStartButton = () => {
    navigate("/questions");
  };

  return (
    <>
      <div className="question" {...props}>
        <Popup>
          <div className="question-container">
            <div className="title">
              <h3>Hướng dẫn trả lời</h3>
            </div>
            <div className="instructions">
              <div className="instructions-title">
                Hãy dựa vào hướng dẫn sau đây để trả lời các câu hỏi:
              </div>
              <ul className="instructions-list">
                <li className="instructions-item">
                  Chọn "Có": Nếu câu đó phản ánh hiện trạng đang có và được thực
                  hiện một cách nhất quán (ít nhất 80% thời gian)
                </li>
                <li className="instructions-item">
                  Chọn "Không có": nếu hoàn toàn chưa thực hiện
                </li>
                <li className="instructions-item">
                  Chọn "Không rõ vấn đề này": Nếu chưa chắc chắn đã thực hiện
                  hay chưa
                </li>
              </ul>
            </div>
            <div className="actions actions-instructions">
              <button className="btn-primary" onClick={handleStartButton}>
                Bắt đầu
              </button>
            </div>
          </div>
        </Popup>
      </div>
    </>
  );
};
export default Instruction;
