import { createContext, useState } from "react";

const UserDataContext = createContext({});

export const UserDataProvider = ({ children }) => {
  const [totalScore, setTotalScore] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userResult, setUserResult] = useState({});

  return (
    <UserDataContext.Provider
      value={{
        totalScore,
        setTotalScore,
        userEmail,
        setUserEmail,
        indexQuestion,
        setIndexQuestion,
        answers,
        setAnswers,
        userResult,
        setUserResult,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
