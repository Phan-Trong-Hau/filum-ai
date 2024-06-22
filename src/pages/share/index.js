import { useContext, useEffect } from "react";
import Popup from "../../components/Popup";
import UserDataContext from "../../context/UserDataProvider";
import { useNavigate } from "react-router-dom";

const Share = () => {
  const { userEmail, userResult } = useContext(UserDataContext);
  const navigate = useNavigate();

  const resultUrl = `https://filum-ai-server.vercel.app/result?level=${userResult.level}&user=${userEmail}`;

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(resultUrl);
      alert("Đường dẫn đã được sao chép vào clipboard!");
    } catch (error) {
      alert("Có lỗi xảy ra khi sao chép vào clipboard!");

      console.error("Có lỗi xảy ra khi sao chép: ", error);
    }
  };

  const handleCancel = () => {
    navigate("/result");
  };

  const handleShareByFB = () => {
    window.FB.ui(
      {
        method: "share",
        href: resultUrl,
      },
      () => {}
    );
  };

  const handleShareByEmail = () => {
    alert("Chức năng chia sẻ qua Email đang được phát triển!");
  };

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "12345",
        xfbml: true,
        version: "v11.0",
      });
    };
  }, []);

  return (
    <>
      <div className="share">
        <Popup backgroundWhite={true}>
          <div className="share-container">
            <h3 className="title">Chia sẻ kết quả</h3>
            <p className="content">
              Đây là một số cách bạn có thể chia sẽ với bạn bè, đồng nghiệp của
              mình.
            </p>

            <div className="actions">
              <button onClick={handleShareByFB} className="btn-primary">
                Chia sẽ qua Facebook
              </button>
              <button className="btn-secondary" onClick={handleShareByEmail}>
                Chia sẽ qua Email
              </button>
              <button className="btn-secondary" onClick={handleCopyToClipboard}>
                Sao chép đường liên kết dẫn đến trang kết quả
              </button>
              <button className="btn-secondary" onClick={handleCancel}>
                Hủy
              </button>
            </div>
          </div>
        </Popup>
      </div>
    </>
  );
};

export default Share;
