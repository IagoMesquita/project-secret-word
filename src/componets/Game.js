import './Game.css' 

function Game({verifyLetter}) {
  return (
    <div class="game">
      <p class="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 class="tip">
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <div class="wordContainer">
        <span className='letter'>A</span>
        <span class="blankSquare"></span>
      </div>
      <div class="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name='letter' maxLength="1" required/>
        </form>
      </div>
    </div>
  )
}

export default Game