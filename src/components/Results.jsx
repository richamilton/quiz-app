import { AppStateContext } from "../helpers/Context";
import { Questions } from "../helpers/Questions";
import { useContext } from "react";

function Results() {
  const {_appState, _setAppState, userName, _setUserName, selectedOptions, _setSelectedOptions} = useContext(AppStateContext);

  const calculateScore = () => {
    return selectedOptions.reduce((score, option, index) => {
      if (option === Questions[index].answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  return (
    <div>
      <h2>Results</h2>
      <p>User: {userName}</p>
      <p>Score: {calculateScore()}</p>
    </div>
  );
}

export default Results;
