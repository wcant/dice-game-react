import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import WinnerDialog from "./WinnerDialog";

import { nanoid } from "nanoid";

export default function PlayerCardsContainer(props) {
  const [showWinnerDialog, setShowWinnerDialog] = useState(false);
  const [activePlayer, setActivePlayer] = useState("player1");
  const [currentHighScore, setCurrentHighScore] = useState({
    player: "",
    score: 0,
  });

  function declareWinner() {
    setShowWinnerDialog((prevState) => !prevState);
  }

  function makeNewPlayerCards() {
    const newPlayerCards = [];
    for (let i = 1; i <= props.numPlayers; i++) {
      newPlayerCards.push({
        player: `player${i}`,
        id: nanoid(),
      });
    }
    return newPlayerCards;
  }
  const playerCards = makeNewPlayerCards();
  const playerCardElements = playerCards.map((player) => (
    <PlayerCard
      key={player.id}
      player={player.player}
      score={player.score}
      active={activePlayer}
      currentHighScore={currentHighScore}
      setCurrentHighScore={setCurrentHighScore}
    />
  ));

  useEffect(() => {
    if (currentHighScore > 10) {
      declareWinner();
    }
    console.log(currentHighScore);
  }, [currentHighScore]);

  return (
    <>
      {showWinnerDialog && <WinnerDialog setShowDialog={setShowWinnerDialog} />}
      {!showWinnerDialog && (
        <div className="player-cards-container">{playerCardElements}</div>
      )}
    </>
  );
}
