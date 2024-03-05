import React, { useState } from "react";
import "../questions/questions.css";

function Questions() {
  const object = {
    easy: ["Two sum", "Balanced Paranthesis"],
    medium: ["Two sum", "Balanced Paranthesis", "Splitwise"],
    hard: ["Two sum", "Balanced Paranthesis"],
  };

  const [checkedQuestions, setCheckedQuestions] = useState({
    easy: Array(object.easy.length).fill(false),
    medium: Array(object.medium.length).fill(false),
    hard: Array(object.hard.length).fill(false),
  });

  const calculateProgress = (difficulty) => {
    const totalQuestions = object[difficulty].length;
    const checkedCount = checkedQuestions[difficulty].filter(Boolean).length;
    return `${checkedCount}/${totalQuestions}`;
  };

  const handleCheckboxChange = (difficulty, index) => {
    setCheckedQuestions((prevCheckedQuestions) => {
      const updatedCheckedQuestions = [...prevCheckedQuestions[difficulty]];
      updatedCheckedQuestions[index] = !updatedCheckedQuestions[index];
      return {
        ...prevCheckedQuestions,
        [difficulty]: updatedCheckedQuestions,
      };
    });
  };

  return (
    <>
      <div className="table-div">
        {Object.entries(object).map(([difficulty, questions]) => (
          <div className="question-table" key={difficulty}>
            <h2>
              {" "}
              {difficulty.toUpperCase()} {" "}
              {calculateProgress(difficulty)}
            </h2>
            <table>
              <tbody>
                {questions.map((question, questionIndex) => (
                  <tr key={questionIndex}>
                    <td>{questionIndex + 1}</td>
                    <td>{question}</td>
                    <td className="checkbox-col">
                      <input
                        type="checkbox"
                        checked={checkedQuestions[difficulty][questionIndex]}
                        onChange={() =>
                          handleCheckboxChange(difficulty, questionIndex)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}

export default Questions;
