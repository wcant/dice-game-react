import { useState } from "react";
import NumPlayersDialog from "./NumPlayersDialog";
import WinnerDialog from "./WinnerDialog";
import PlayerCardsContainer from "./PlayerCardsContainer";
import Messages from "./Messages";
import "../styles/GameBoard.css";
import { nanoid } from "nanoid";

const initialState = {
  numPlayers: 2,
  topMessage: "Let's Play Dice!!!",
  bottomMessage: "Roll to see who goes first.",
  firstPlayer: "",
  round: 0,
  roundWinner: { player: "", roll: "" },
  playersLeftInRound: [],
  winner: "",
};

export default function GameBoard() {
  const [showNumPlayersDialog, setShowNumPlayersDialog] = useState(true);
  const [showWinnerDialog, setShowWinnerDialog] = useState(false);
  // const [numPlayers, setNumPlayers] = useState(2);
  // const [topMessage, setTopMessage] = useState("Let's Play Dice!!!");
  // const [bottomMessage, setBottomMessage] = useState(
  //   "Roll to see who goes first."
  // );
  // const [playerCards, setPlayerCards] = useState(() => makePlayerCards());
  // const [round, setRound] = useState(0);
  // const [roundWinner, setRoundWinner] = useState({ player: "", roll: 0 });
  // const [playersLeftInRound, setPlayersLeftInRound] = useState([]);
  // const [firstPlayer, setFirstPlayer] = useState("");
  // const [winner, setWinner] = useState("");

  // Trying this because it is easier to reset the game by simply replacing with initialState
  const [
    {
      numPlayers,
      topMessage,
      bottomMessage,
      firstPlayer,
      round,
      roundWinner,
      playersLeftInRound,
      winner,
    },
    setState,
  ] = useState(initialState);

  console.log(playersLeftInRound);

  return (
    <>
      {showNumPlayersDialog && (
        <NumPlayersDialog
          setShowNumPlayersDialog={setShowNumPlayersDialog}
          setState={setState}
        />
      )}

      {showWinnerDialog && (
        <WinnerDialog
          winner={winner}
          setShowWinnerDialog={setShowWinnerDialog}
          setShowNumPlayersDialog={setShowNumPlayersDialog}
          setState={setState}
          initialState={initialState}
        />
      )}

      {!showNumPlayersDialog && !showWinnerDialog && (
        <div className="game-board">
          <Messages topMessage={topMessage} bottomMessage={bottomMessage} />
          {/* <p>{playersLeftInRound}</p> */}
          <PlayerCardsContainer
            numPlayers={numPlayers}
            firstPlayer={firstPlayer}
            winner={winner}
            round={round}
            roundWinner={roundWinner}
            playersLeftInRound={playersLeftInRound}
            setState={setState}
            setShowWinnerDialog={setShowWinnerDialog}
          />
        </div>
      )}
    </>
  );
}
