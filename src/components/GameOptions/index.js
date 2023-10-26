import {
  OptionsListItem,
  GameOptionButton,
  OptionImage,
} from './styledComponents'

const GameOptions = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {imageUrl, id} = optionDetails

  const userChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <OptionsListItem>
      <GameOptionButton
        type="button"
        onClick={userChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <OptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionsListItem>
  )
}

export default GameOptions
