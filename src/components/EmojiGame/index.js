import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, totalScore: 0, clickedEmojiIdList: [], gameOver: false}

  onClickEmojiCard = id => {
    const {clickedEmojiIdList} = this.state

    if (clickedEmojiIdList.includes(id) === false) {
      this.setState(prevState => ({
        clickedEmojiIdList: [...prevState.clickedEmojiIdList, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({gameOver: true})
    }
  }

  onClickPlayAgain = () => {
    const {score, totalScore} = this.state
    if (score >= totalScore) {
      this.setState({
        gameOver: false,
        clickedEmojiIdList: [],
        score: 0,
        totalScore: score,
      })
    } else {
      this.setState({
        gameOver: false,
        clickedEmojiIdList: [],
        score: 0,
      })
    }
  }

  render() {
    function shuffleArray(emojisList) {
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {emojisList} = this.props

    const shuffledEmojisList = shuffleArray(emojisList)

    const {score, totalScore, gameOver} = this.state

    return (
      <div className="app-container">
        <NavBar score={score} topScore={totalScore} gameOver={gameOver} />
        <div className="bottom-container">
          {gameOver === true || score === 12 ? (
            <WinOrLoseCard
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          ) : (
            <ul className="emoji-cards-container">
              {shuffledEmojisList.map(eachEmojiCard => (
                <EmojiCard
                  emojiDetails={eachEmojiCard}
                  key={eachEmojiCard.id}
                  onClickEmojiCard={this.onClickEmojiCard}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
