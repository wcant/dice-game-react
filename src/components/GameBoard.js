import { useState, useEffect, useMemo } from "react";
import NumPlayersDialog from "./NumPlayersDialog";
import WinnerDialog from "./WinnerDialog";
import PlayerCardsContainer from "./PlayerCardsContainer";

import Leaderboard from "./Leaderboard";

export default function GameBoard() {
  const [showNumPlayersDialog, setShowNumPlayersDialog] = useState(true);
  const [showWinnerDialog, setShowWinnerDialog] = useState(false);
  const [numPlayers, setNumPlayers] = useState(2);
  const [currentHighScore, setCurrentHighScore] = useState({});
  console.log(numPlayers);

  return (
    <>
      {showNumPlayersDialog && (
        <NumPlayersDialog
          setShowDialog={setShowNumPlayersDialog}
          setNumPlayers={setNumPlayers}
        />
      )}
      {/* Winner dialog needs to be able to see who won the game */}
      {/*  - need to be able to reset the game after a winner is declared (go back to num player select) */}
      {showWinnerDialog && <WinnerDialog setShowDialog={setShowWinnerDialog} />}
      <div className="gameBoard">
        <PlayerCardsContainer
          numPlayers={numPlayers}
          setCurrentHighScore={setCurrentHighScore}
        />
      </div>
    </>
  );
}
