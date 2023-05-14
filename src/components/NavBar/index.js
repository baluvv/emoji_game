import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props

  if (gameOver === false && score < 12) {
    return (
      <div className="navBar">
        <div className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="emoji-game-heading">Emoji Game</h1>
        </div>
        <div className="nav-container">
          <p className="scores">Score: {score}</p>
          <p className="scores">Top Score: {topScore}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="navBar">
      <div className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-game-heading">Emoji Game</h1>
      </div>
    </div>
  )
}

export default NavBar
