import './App.css'

import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Results from './components/Results'

import { Questions } from './helpers/Questions'

import { useState } from "react";
import { AppStateContext } from './helpers/Context'

function App() {
  const [appState, setAppState] = useState('menu');
  const [userName, setUserName] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(Questions.map(() => null));
  return (
    <div className="app-container">
      <h1>Quiz App</h1>
      <AppStateContext.Provider value={{appState, setAppState, userName, setUserName, selectedOptions, setSelectedOptions}}>
        {appState === 'menu' && <Menu />}
        {appState === 'quiz' && <Quiz />}
        {appState === 'results' && <Results />}
      </AppStateContext.Provider>
    </div>
  )
}

export default App
