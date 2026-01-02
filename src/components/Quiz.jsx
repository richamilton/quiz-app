import {Questions} from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { AppStateContext } from "../helpers/Context";

function Quiz() {
  const {_appState, setAppState, _userName, _setUserName, selectedOptions, setSelectedOptions} = useContext(AppStateContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionSelect = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
  };

  const goToPrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const goToNext = () => {
    if (currentQuestion === Questions.length - 1) {
      setAppState('results');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <p className="question"> {Questions[currentQuestion].prompt} </p>
      <div>
        <button className={`option ${selectedOptions[currentQuestion] === "optionA" ? "selected" : ""}`} onClick={() => handleOptionSelect("optionA")}> 
          {Questions[currentQuestion].optionA} 
        </button>
        <button className={`option ${selectedOptions[currentQuestion] === "optionB" ? "selected" : ""}`} onClick={() => handleOptionSelect("optionB")}> 
          {Questions[currentQuestion].optionB} 
        </button>
        <button className={`option ${selectedOptions[currentQuestion] === "optionC" ? "selected" : ""}`} onClick={() => handleOptionSelect("optionC")}> 
          {Questions[currentQuestion].optionC} 
        </button>
        <button className={`option ${selectedOptions[currentQuestion] === "optionD" ? "selected" : ""}`} onClick={() => handleOptionSelect("optionD")}> 
          {Questions[currentQuestion].optionD} 
        </button>
      </div>
      <div className="nav-buttons">
        <button onClick={goToPrevious} disabled={currentQuestion === 0}>
            Previous
        </button>
        <button onClick={goToNext}>
            {currentQuestion === Questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
      {selectedOptions[currentQuestion] && <p> Selected Option: {selectedOptions[currentQuestion]} </p>}
    </div>
  )
}

export default Quiz;
