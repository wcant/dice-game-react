import { useState, useEffect } from "react";
import NumPlayersDialog from "./NumPlayersDialog";
import PlayerCardsContainer from "./PlayerCardsContainer";
import Messages from "./Messages";
import "../styles/GameBoard.css";

import Leaderboard from "./Leaderboard";

export default function GameBoard() {
  const [showNumPlayersDialog, setShowNumPlayersDialog] = useState(true);
  const [numPlayers, setNumPlayers] = useState(2);
  const [topMessage, setTopMessage] = useState("Let's Play Dice!!!");
  const [bottomMessage, setBottomMessage] = useState(
    "Roll to see who goes first."
  );
  console.log(numPlayers);

  return (
    <>
      {showNumPlayersDialog && (
        <NumPlayersDialog
          setShowDialog={setShowNumPlayersDialog}
          setNumPlayers={setNumPlayers}
        />
      )}

      {!showNumPlayersDialog && (
        <div className="game-board">
          <Messages topMessage={topMessage} bottomMessage={bottomMessage} />
          <PlayerCardsContainer numPlayers={numPlayers} />
        </div>
      )}
    </>
  );
}
