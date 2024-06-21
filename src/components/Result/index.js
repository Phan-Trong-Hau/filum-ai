import Popup from "../Popup";
import data from "../../data/assessment.json";
import { useEffect, useState } from "react";

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
              <p>Tổng điểm của bạn là: {totalScore}</p>
            </div>
          </div>
        </Popup>
      </div>
    </>
  );
};

export default Result;
