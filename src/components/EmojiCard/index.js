import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmojiCard} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    onClickEmojiCard(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="img-button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emoji-image"
          onClick={onClickEmoji}
        />
      </button>
    </li>
  )
}

export default EmojiCard
