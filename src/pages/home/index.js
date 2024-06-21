import { useState } from "react";
import Popup from "../../components/Popup";
import Questions from "../../components/Questions";

const Home = () => {
  const [email, setEmail] = useState("");


  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleButtonStart = (e) => {
    if (validateEmail(email)) {
      alert("Email hợp lệ");
    } else {
      alert("Email không hợp lệ");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <main>
      <section>
        <h1>
          Công ty bạn trưởng thành như thế nào trong việc lắng nghe khách hàng
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
      <Questions />
    </main>
  );
};

export default Home;
