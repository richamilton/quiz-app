import { useContext } from 'react';
import { AppStateContext } from '../helpers/Context'

function Menu() {
  const {_appState, setAppState, userName, setUserName, _selectedOptions, _setSelectedOptions} = useContext(AppStateContext);
  return (
    <div className="Menu">
      <p>Enter your name:</p>
      <input type="text" placeholder="Eg. John Doe" onChange={(e) => setUserName(e.target.value)}/>
      <button onClick={() => setAppState('quiz')}>Start Quiz</button>
      <p>Current User: {userName}</p>
    </div>
  )
}

export default Menu
