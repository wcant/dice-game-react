import Dialog from "./Dialog";
import confetti from "../images/confetti.gif";

export default function WinnerDialog(props) {
  return (
    <Dialog>
      <div className="winner-dialog">
        <img src={confetti} alt="" />
        <h2>Congratulations</h2>
        <h3>{props.winner} wins!!!</h3>
        <button>Play Again</button>
      </div>
    </Dialog>
  );
}
