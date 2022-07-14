import './Game.css' 

function Game({
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) {
  console.log(pickedWord)
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação:{score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda têm {guesses} tentativas</p>
      <div className="wordContainer">
        {
          letters.map((letter, index) => (
            guessedLetters.includes(letter) ? (
              <span className='letter' key={index}>{letter}</span>
            ) : (
              <span className="blankSquare" key={index}>?</span>
            )
          ))
        }
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name='letter' maxLength="1" required/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((wrongLetter, i) => (
          <span key={i}>{wrongLetter}</span>
        ))}
      </div>
    </div>
  )
}

export default Game