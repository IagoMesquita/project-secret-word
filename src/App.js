// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data: por não haver Default na exportação, importaremos assim:
import { wordsList } from './data/words';

// Components
import StartScreen from './componets/StartScreen';

const stages = [
  { id: 1, name: 'start'},
  { id: 2, name: 'game'},
  { id: 3, name: 'end'},
]
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  return (
    <div className="App">
      <StartScreen />
    </div>
  );
}

export default App;
