import { useState, useEffect } from "react";
import Die from "./Die";

export default function PlayerCard(props) {
  const [score, setScore] = useState(0);
  const [roll, setRoll] = useState(0);

  function handleDiceRoll() {
    setRoll(Math.ceil(Math.random() * 6));
    setScore((prevScore) => (prevScore += roll));
  }

  console.log(roll);
  return (
    <div className="player-card">
      <h3 className="player--name">{props.player}</h3>
      <p className="player--score">Score: {score}</p>
      <Die roll={roll} />
      <button type="button" onClick={handleDiceRoll}></button>
    </div>
  );
}
