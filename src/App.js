// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data: por não haver Default na exportação, importaremos assim:
import { wordsList } from './data/words';

// Components
import StartScreen from './componets/StartScreen';
import Game from './componets/Game';
import GameOver from './componets/GameOver'

const stages = [
  { id: 1, name: 'start'},
  { id: 2, name: 'game'},
  { id: 3, name: 'end'},
]
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList);

  //
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  
  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)]
    
      // pick a random word
    const word = words[category][Math.floor(Math.random() * Object.keys(categories).length)]
    return {word, category}
  }
   
  // starts the secret word game
  const startGame = () => {
    // pick word and category
    const {word, category } = pickWordAndCategory()
    
    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    
    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {return} 

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      
      setGuessedLetters([...guessedLetters, normalizedLetter])
    } else {
      setWrongLetters([...wrongLetters,  normalizedLetter])
    }
  }

  // restarts the game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      { gameStage === 'start' &&  <StartScreen startGame={startGame} /> }
      { gameStage === 'game' &&  (
        <Game 
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        /> 
      )}
      { gameStage === 'end' &&  <GameOver retry={retry} /> }
    </div>
  );
}

export default App;
