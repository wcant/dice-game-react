import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

export default function PlayerCardsContainer(props) {
  const playerCardElements = [];
  useEffect(() => {
    for (let player = 1; player <= props.numPlayers; player++) {
      playerCardElements.push(
        <PlayerCard
          key={player}
          player={`player${player}`}
          setCurrentHighScore={props.setCurrentHighScore}
        />
      );
    }
    console.log(playerCardElements);
  });
  return <div className="player-cards-container">{playerCardElements}</div>;
}
