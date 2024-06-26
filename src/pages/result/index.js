import Popup from "../../components/Popup";
import UserDataContext from "../../context/UserDataProvider";
import data from "../../data/assessment.json";
import { useContext, useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import refreshIcon from "../../icons/refresh.svg";
import downloadIcon from "../../icons/download.svg";
import { useNavigate } from "react-router-dom";

const Result = ({ ...props }) => {
  const [textLevel, setTextLevel] = useState("Ad hoc");
  const { results } = data;
  const {
    totalScore,
    setTotalScore,
    setIndexQuestion,
    setAnswers,
    userResult,
    setUserResult,
  } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleRefreshButton = () => {
    setTotalScore(0);
    setIndexQuestion(0);
    setAnswers([]);
    setUserResult({});
    navigate("/instruction");
  };

  const handleShareButton = () => {
    navigate("/share");
  };

  const handleDownloadButton = () => {
    alert("Chức năng Download đang được phát triển!");
  };

  useEffect(() => {
    results?.forEach((result) => {
      result.range.sort((a, b) => a - b);

      if (totalScore >= result.range[0] && totalScore < result.range[1]) {
        setUserResult(result);

        switch (result.level) {
          case 1:
            setTextLevel("Ad hoc");
            break;
          case 2:
            setTextLevel("Establishing");
            break;
          case 3:
            setTextLevel("Performing");
            break;
          case 4:
            setTextLevel("Optimizing");
            break;
          case 5:
            setTextLevel("Embedded");
            break;
          default:
            setTextLevel("Ad hoc");
            break;
        }
      }
    });
  }, [totalScore, results, setUserResult]);

  return (
    <>
      <div className="result" {...props}>
        <Popup>
          <div className="result-container">
            <div className="title">
              <div className="title-left">
                <img src={userResult.icon} alt="icon" />
              </div>
              <div className="title-right">
                <div>Voice of the customer - Cấp Độ {userResult.level}</div>
                <h2>{textLevel}</h2>
              </div>
            </div>
            <div className="result">
              <p>{userResult.description?.text}</p>
              <GaugeChart
                id="gauge-chart"
                percent={totalScore / 10}
                nrOfLevels={5}
                marginInPercent={0.1}
                arcPadding={0}
                cornerRadius={0}
                needleColor="#c48f00"
                colors={["#c48f00", "#c8c8c8"]}
                textComponentContainerClassName="text-container"
                textComponent={
                  <div className="text">
                    {totalScore}
                    <br />
                    Score
                  </div>
                }
              />
            </div>
          </div>
        </Popup>
        <div className="action">
          <button className="btn-primary" onClick={handleShareButton}>
            Chia sẽ
          </button>
          <button className="btn-secondary" onClick={handleDownloadButton}>
            <img width={20} src={downloadIcon} alt="download-icon" />
          </button>
          <button className="btn-secondary" onClick={handleRefreshButton}>
            <img width={20} src={refreshIcon} alt="refresh-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
