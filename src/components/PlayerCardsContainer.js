import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import WinnerDialog from "./WinnerDialog";
import { nanoid } from "nanoid";

export default function PlayerCardsContainer(props) {
  const [showWinnerDialog, setShowWinnerDialog] = useState(false);
  const [playerCards, setPlayerCards] = useState(makePlayerCards());
  const [round, setRound] = useState(0);
  const [playersLeftInRound, setPlayersLeftInRound] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState("");
  const [winner, setWinner] = useState("");

  // setup the conditions for determining first player
  useEffect(() => {
    setPlayersLeftInRound(() => {
      const playerNames = playerCards.map((player) => player.player);
      return playerNames;
    });
  }, []);

  // when firstPlayer is chosen, set the order in playersLeftInRound
  // and set round to 1 --- ??? not relevant now
  useEffect(() => {
    if (playersLeftInRound === 0) {
    }
  }, [playersLeftInRound]);

  function declareWinner() {
    setShowWinnerDialog((prevState) => !prevState);
  }

  function makePlayerCards() {
    const newPlayerCards = [];
    for (let i = 1; i <= props.numPlayers; i++) {
      newPlayerCards.push({
        player: `player${i}`,
        id: nanoid(),
      });
    }
    return newPlayerCards;
  }

  const playerCardElements = playerCards.map((player) => (
    <PlayerCard
      key={player.id}
      player={player.player}
      score={player.score}
      playersLeftInRound={playersLeftInRound}
      setPlayersLeftInRound={setPlayersLeftInRound}
      setWinner={setWinner}
    />
  ));
  console.log(playersLeftInRound);

  //   useEffect(() => {
  //     addPlayersToRound();
  //   }, [round]);

  //   useEffect(() => {
  //     if (currentHighScore > 10) {
  //       declareWinner();
  //     }
  //     console.log(currentHighScore);
  //   }, [currentHighScore]);

  return (
    <>
      {showWinnerDialog && <WinnerDialog setShowDialog={setShowWinnerDialog} />}
      {!showWinnerDialog && (
        <div className="player-cards-container">{playerCardElements}</div>
      )}
    </>
  );
}
