import Popup from "../Popup";
import data from "../../data/assessment.json";
import { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";

const Result = ({ totalScore, ...props }) => {
  const [userResult, setUserResult] = useState({});
  const { results } = data;

  useEffect(() => {
    results?.forEach((result) => {
      result.range.sort((a, b) => a - b);

      if (totalScore >= result.range[0] && totalScore < result.range[1]) {
        setUserResult(result);
      }
    });
  }, [totalScore, results]);

  console.log({ userResult });

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
                <h2>Performing</h2>
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
          <button>Chia sẽ</button>
          <button>Tải Xuống</button>
          <button>Làm lại</button>
        </div>
      </div>
    </>
  );
};

export default Result;
