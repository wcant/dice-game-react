import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import { nanoid } from "nanoid";

export default function PlayerCardsContainer(props) {
  const {
    numPlayers,
    firstPlayer,
    winner,
    round,
    roundWinner,
    playersLeftInRound,
    setState,
    setShowWinnerDialog,
  } = props;

  const [playerCards, setPlayerCards] = useState(() => makePlayerCards());

  function makePlayerCards() {
    const newPlayerCards = [];
    for (let i = 1; i <= numPlayers; i++) {
      newPlayerCards.push({
        player: `player${i}`,
        id: nanoid(),
      });
    }
    return newPlayerCards;
  }

  // On initial load,
  // -- playersLeftInRound array is populated with default order (p1, p2, ...)
  // -- Player 1 is set to active

  // Rolling dice drives the game and as each round is completed (playersLeftInRound.length === 0)
  //   -- round++
  //   -- playersLeftInRound repopulates

  // firstPlayer being set starts the game
  //      -- message: round 1
  //      -- playersLeftInRound array filled with the correct order

  // initialize game -- set the order of players for
  useEffect(() => {
    console.log("setting players left in round");
    setState((prevState) => ({
      ...prevState,
      playersLeftInRound: playerCards.map((player) => player.player),
    }));

    // setPlayersLeftInRound(() => {
    //   const playerNames = playerCards.map((player) => player.player);
    //   return playerNames;
    // });
  }, [round, playerCards, setState]);

  useEffect(() => {
    console.log(`round updated`);
  }, [round]);

  //   useEffect(() => {
  //     console.log(`playersLeftInRound updated`);
  //   }, [props.playersLeftInRound]);

  //   console.log(`playersLeftInRound: ${playersLeftInRound}`);
  //   console.log(`first player: ${firstPlayer}`);
  //   console.log(`round: ${round}`);

  useEffect(() => {
    if (playersLeftInRound.length === 0) {
      // Increment rounds only if the game
      //  has started (first player chosen)
      if (!firstPlayer) {
        setState((prevState) => ({
          ...prevState,
          firstPlayer: roundWinner.player,
        }));
        // setFirstPlayer(roundWinner.player);
      } else {
        setState((prevState) => ({
          ...prevState,
          round: prevState.round + 1,
        }));
        // setRound((prevRound) => prevRound + 1);
      }
    }
  }, [playersLeftInRound, firstPlayer, roundWinner, setState]);

  useEffect(() => {
    console.log(`update round #${round}`);
    console.log(`first player: ${firstPlayer}`);
    if (firstPlayer) {
      setState((prevState) => ({
        ...prevState,
        bottomMessage: `Round ${round}`,
      }));
      //   setBottomMessage(`Round ${round}`);
    }
  }, [round, firstPlayer, setState]);

  // declare winner
  useEffect(() => {
    if (winner) setShowWinnerDialog((prevState) => !prevState);
  }, [winner, setShowWinnerDialog]);

  const playerCardElements = playerCards.map((player) => (
    <PlayerCard
      key={player.id}
      player={player.player}
      playersLeftInRound={playersLeftInRound}
      firstPlayer={firstPlayer}
      setState={setState}
      //   setPlayersLeftInRound={setPlayersLeftInRound}
      //   setRoundWinner={setRoundWinner}
      //   setWinner={setWinner}
    />
  ));

  return (
    <>
      <div className="player-cards-container">{playerCardElements}</div>
    </>
  );
}
