import { useState, useEffect } from "react";
import Die from "./Die";

export default function PlayerCard(props) {
  const [score, setScore] = useState(0);
  const [roll, setRoll] = useState(0);

  // update score
  useEffect(() => {
    setScore((prevScore) => (prevScore += roll));
    // declare winner if score > 20
    if (score >= 20) {
      props.setWinner(() => props.player);
    }
  }, [roll]);

  function handleDiceRoll() {
    setRoll(Math.ceil(Math.random() * 6));

    // remove current player from playersLeftInRound
    props.setPlayersLeftInRound((prev) => {
      prev.shift();
      return [...prev];
    });
  }

  return (
    <div
      className={`player-card${
        props.playersLeftInRound[0] === props.player ? " card-active" : ""
      }`}
    >
      <h3 className="player--name">{props.player}</h3>
      <p className="player--score">Score: {score}</p>
      <Die roll={roll} />
      <button
        type="button"
        className={`btn btn-green btn-roll${
          props.playersLeftInRound[0] === props.player ? " active" : ""
        }`}
        onClick={handleDiceRoll}
      >
        Roll Die
      </button>
    </div>
  );
}
