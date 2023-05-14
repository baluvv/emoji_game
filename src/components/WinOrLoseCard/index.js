import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props
  console.log(score)

  const onClickPlayAgainButton = () => {
    onClickPlayAgain()
  }

  if (score < 12) {
    return (
      <div className="results-container">
        <div className="result-container">
          <h1 className="result-heading">You Lose</h1>
          <p className="result-score">Score</p>
          <p className="result-digits">{score}/12</p>
          <button
            type="button"
            className="button"
            onClick={onClickPlayAgainButton}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="result-image"
        />
      </div>
    )
  }
  return (
    <div className="results-container">
      <div className="result-container">
        <h1 className="result-heading">You Won</h1>
        <p className="result-score">Best Score</p>
        <p className="result-digits">{score}/12</p>
        <button
          type="button"
          className="button"
          onClick={onClickPlayAgainButton}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="result-image"
      />
    </div>
  )
}
export default WinOrLoseCard
