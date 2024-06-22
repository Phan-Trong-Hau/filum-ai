import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../../context/UserDataProvider";
import Popup from "../../components/Popup";

const Home = () => {
  const { userEmail, setUserEmail } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);

  const validateEmail = () => {
    return String(userEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleButtonStart = () => {
    if (validateEmail()) {
      navigate("/instruction");
    } else {
      setOpenPopup(true)
    }
  };

  const handleOnChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <div className="home">
      <section>
        <h1>
          Công ty bạn trưởng thành như thế nào trong việc lắng nghe khách hàng?
        </h1>
        <p>
          Đánh giá khả năng của bạn trong việc lắng nghe, hiểu và đáp ứng các
          tín hiệu từ khách hàng
        </p>
        <label>
          <input
            type="text"
            placeholder="Địa chỉ email của bạn"
            onChange={handleOnChange}
          />
          <button type="submit" onClick={handleButtonStart}>
            Bắt đầu
          </button>
        </label>
      </section>
      {openPopup && (
        <Popup>
          <div>
            <p>Để bắt đầu, vui lòng nhập địa chỉ email của bạn.</p>
            <br />
            <button onClick={() => setOpenPopup(false)}>OK</button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default Home;
