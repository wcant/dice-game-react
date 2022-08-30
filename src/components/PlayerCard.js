import { useState, useEffect } from "react";
import Die from "./Die";

export default function PlayerCard(props) {
  const {
    setPlayersLeftInRound,
    player,
    playersLeftInRound,
    setRoundWinner,
    setWinner,
  } = props;
  const [score, setScore] = useState(0);
  const [roll, setRoll] = useState(0);

  // declare winner if score > 20
  useEffect(() => {
    if (score >= 20) {
      setWinner(() => player);
    }
  }, [score, setWinner, player]);

  function handleDiceRoll() {
    const newRoll = Math.ceil(Math.random() * 6);

    setRoll(newRoll);
    // console.log(`${player} rolled a ${newRoll}`);
    setScore((prevScore) => (prevScore += newRoll));

    // update round winner if score is higher
    setRoundWinner((prevRoundWinner) => {
      if (newRoll > prevRoundWinner.roll) {
        return { ...prevRoundWinner, player: player, roll: newRoll };
      } else
        return {
          ...prevRoundWinner,
        };
    });

    // remove current player from playersLeftInRound
    setPlayersLeftInRound((prev) => {
      prev.shift();
      return [...prev];
    });
  }

  return (
    <div
      className={`player-card${
        playersLeftInRound[0] === player ? " card-active" : ""
      }`}
    >
      <h3 className="player--name">{player}</h3>
      <p className="player--score">Score: {score}</p>
      <Die roll={roll} />
      <button
        type="button"
        className={`btn btn-green btn-roll${
          playersLeftInRound[0] === player ? " active" : ""
        }`}
        onClick={handleDiceRoll}
      >
        Roll Die
      </button>
    </div>
  );
}
