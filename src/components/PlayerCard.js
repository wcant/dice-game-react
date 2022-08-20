import { useState, useEffect } from "react";
import Die from "./Die";

export default function PlayerCard(props) {
  const [score, setScore] = useState(0);

  let roll;
  function handleDiceRoll() {
    roll = Math.ceil(Math.random() * 6);
    console.log(roll);
    setScore((prevScore) => (prevScore += roll));

    if (roll > props.currentHighScore) {
      props.setCurrentHighScore((prevHighScore) => {
        return {
          ...prevHighScore,
          player: props.player,
          score: score,
        };
      });
      console.log(props.currentHighScore);
    }
  }

  return (
    <div
      className={`player-card${
        props.active === props.player ? " card-active" : ""
      }`}
    >
      <h3 className="player--name">{props.player}</h3>
      <p className="player--score">Score: {score}</p>
      <Die roll={roll} />
      <button
        type="button"
        className={`btn btn-green btn-roll${
          props.active === props.player ? " active" : ""
        }`}
        onClick={handleDiceRoll}
      >
        Roll Die
      </button>
    </div>
  );
}
