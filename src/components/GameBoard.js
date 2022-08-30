import { useState, useEffect } from "react";
import NumPlayersDialog from "./NumPlayersDialog";
import WinnerDialog from "./WinnerDialog";
import PlayerCardsContainer from "./PlayerCardsContainer";
import Messages from "./Messages";
import "../styles/GameBoard.css";

export default function GameBoard() {
  const [showNumPlayersDialog, setShowNumPlayersDialog] = useState(true);
  const [showWinnerDialog, setShowWinnerDialog] = useState(false);
  const [numPlayers, setNumPlayers] = useState(2);
  const [topMessage, setTopMessage] = useState("Let's Play Dice!!!");
  const [bottomMessage, setBottomMessage] = useState(
    "Roll to see who goes first."
  );
  const [winner, setWinner] = useState("");

  return (
    <>
      {showNumPlayersDialog && (
        <NumPlayersDialog
          setShowDialog={setShowNumPlayersDialog}
          setNumPlayers={setNumPlayers}
        />
      )}

      {showWinnerDialog && (
        <WinnerDialog setShowDialog={setShowWinnerDialog} winner={winner} />
      )}

      {!showNumPlayersDialog && !showWinnerDialog && (
        <div className="game-board">
          <Messages topMessage={topMessage} bottomMessage={bottomMessage} />
          <PlayerCardsContainer
            numPlayers={numPlayers}
            winner={winner}
            setWinner={setWinner}
            setTopMessage={setTopMessage}
            setBottomMessage={setBottomMessage}
            setShowWinnerDialog={setShowWinnerDialog}
          />
        </div>
      )}
    </>
  );
}
