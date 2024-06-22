import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../../context/UserDataProvider";
import Popup from "../../components/Popup";

const Home = () => {
  const {
    userEmail,
    setUserEmail,
    setTotalScore,
    setIndexQuestion,
    setAnswers,
    setUserResult,
  } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);

  const validateEmail = () => {
    return String(userEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleStartButton = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      navigate("/instruction");
    } else {
      setOpenPopup(true);
    }
  };

  const handleOnChange = (e) => {
    setUserEmail(e.target.value);
    setTotalScore(0);
    setIndexQuestion(0);
    setAnswers([]);
    setUserResult({});
  };

  return (
    <>
      <div className="home">
        <section>
          <h1>
            Công ty bạn trưởng thành như thế nào trong việc lắng nghe khách
            hàng?
          </h1>
          <p>
            Đánh giá khả năng của bạn trong việc lắng nghe, hiểu và đáp ứng các
            tín hiệu từ khách hàng
          </p>
          <form action={handleStartButton}>
            <input
              type="text"
              placeholder="Địa chỉ email của bạn"
              onChange={handleOnChange}
              value={userEmail}
            />
            <button
              className="btn-primary"
              type="submit"
              onClick={handleStartButton}
            >
              Bắt đầu
            </button>
          </form>
        </section>
      </div>
      {openPopup && (
        <Popup backgroundWhite={true}>
          <div>
            <p className="alert-text">
              Để bắt đầu, vui lòng nhập đúng địa chỉ email của bạn.
            </p>
            <br />
            <button className="btn-primary" onClick={() => setOpenPopup(false)}>
              OK
            </button>
          </div>
        </Popup>
      )}
    </>
  );
};

export default Home;
