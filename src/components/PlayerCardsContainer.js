import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import { nanoid } from "nanoid";

export default function PlayerCardsContainer(props) {
  const {
    setBottomMessage,
    setTopMessage,
    setShowWinnerDialog,
    winner,
    setWinner,
  } = props;

  // On initial load,
  // -- playersLeftInRound array is populated with default order (p1, p2, ...)
  // -- Player 1 is set to active

  // Rolling dice drives the game and as each round is completed (playersLeftInRound.length === 0)
  //   -- round++
  //   -- playersLeftInRound repopulates

  // On each player's roll,
  //  --

  // firstPlayer being set starts the game
  //      -- message: round 1
  //      -- playersLeftInRound array filled with the correct order

  const [playerCards, setPlayerCards] = useState(() => makePlayerCards());
  const [round, setRound] = useState(0);
  const [roundWinner, setRoundWinner] = useState({ player: "", roll: 0 });
  const [playersLeftInRound, setPlayersLeftInRound] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState("");

  // initialize game -- set the order of players for
  useEffect(() => {
    console.log("setting players left in round");
    setPlayersLeftInRound(() => {
      const playerNames = playerCards.map((player) => player.player);
      return playerNames;
    });
  }, [round, playerCards]);

  useEffect(() => {
    if (playersLeftInRound.length === 0) {
      // Increment rounds only if the game
      //  has started (first player chosen)
      if (!firstPlayer) {
        setFirstPlayer(roundWinner.player);
      } else {
        setRound((prevRound) => prevRound + 1);
      }
    }
  }, [playersLeftInRound, setRound, firstPlayer, setFirstPlayer, roundWinner]);

  useEffect(() => {
    console.log(`update round #${round}`);
    console.log(`first player: ${firstPlayer}`);
    if (firstPlayer) {
      setBottomMessage(`Round ${round}`);
    }
  }, [setBottomMessage, round, firstPlayer]);

  // declare winner
  useEffect(() => {
    if (winner) setShowWinnerDialog((prevState) => !prevState);
  }, [winner, setShowWinnerDialog]);

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
      playersLeftInRound={playersLeftInRound}
      setPlayersLeftInRound={setPlayersLeftInRound}
      setRoundWinner={setRoundWinner}
      setWinner={setWinner}
    />
  ));

  return (
    <>
      <div className="player-cards-container">{playerCardElements}</div>
    </>
  );
}
