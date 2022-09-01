import Dialog from "./Dialog";
import "../styles/WinnerDialog.css";

export default function WinnerDialog(props) {
  const {
    winner,
    setShowWinnerDialog,
    setState,
    initialState,
    setShowNumPlayersDialog,
  } = props;

  function handlePlayAgain() {
    // setShowNumPlayersDialog -> true to select player number
    // firstPlayer -> "" so that the first roll determines the first player
    // round # => 0
    // bottomMessage -> "Roll to see who goes first."
    // roundWinner -> {player: "", roll: 0}
    setState(() => ({
      ...initialState,
    }));
    setShowWinnerDialog(false);
    setShowNumPlayersDialog(true);
  }
  return (
    <Dialog>
      <div
        className="dialog-content"
        style={{
          backgroundImage: `url(/confetti.gif)`,
        }}
      >
        <h2>Congratulations</h2>
        <h3>{winner} wins!!!</h3>
        <button className="btn btn-green btn-large" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    </Dialog>
  );
}
