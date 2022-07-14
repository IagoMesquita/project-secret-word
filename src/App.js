// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data: por não haver Default na exportação, importaremos assim:
import { wordsList } from './data/words';

// Components
import StartScreen from './componets/StartScreen';
import Game from './componets/Game';
import GameOver from './componets/GameOver';

const stages = [
  { id: 1, name: 'start'},
  { id: 2, name: 'game'},
  { id: 3, name: 'end'},
]
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList)

  return (
    <div className="App">
      { gameStage === 'start' &&  <StartScreen /> }
      { gameStage === 'game' &&  <Game /> }
      { gameStage === 'end' &&  <GameOver /> }
    </div>
  );
}

export default App;
