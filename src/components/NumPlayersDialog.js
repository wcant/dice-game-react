import { useState } from "react";
import Dialog from "./Dialog";
import "../styles/NumPlayersDialog.css";

export default function NumPlayersDialog(props) {
  const { numPlayers, setShowNumPlayersDialog, setState } = props;

  const [selected, setSelected] = useState("2");

  function handleClick(e) {
    const { value } = e.target;
    setSelected(value);
  }

  // Submit
  // - Only change numPlayers on submit, less calculations than changing onClick of numbers
  // - defaults to 2 players
  // - the modal needs to be hidden
  function handleSubmit(e) {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      numPlayers: parseInt(selected),
    }));
    setShowNumPlayersDialog(false);
  }

  return (
    <Dialog>
      <div className="dialog-content">
        <h1>Let's Play Dice!!!</h1>
        <form id="playerNumForm" onSubmit={handleSubmit}>
          <legend>Select the Number of Players</legend>
          <div className="container">
            <button
              type="button"
              name="nPlayers"
              value="2"
              className={`player-btn${selected === "2" ? " selected" : ""}`}
              tabIndex="0"
              onClick={handleClick}
            >
              2
            </button>
            <button
              type="button"
              name="nPlayers"
              value="3"
              className={`player-btn${selected === "3" ? " selected" : ""}`}
              tabIndex="0"
              onClick={handleClick}
            >
              3
            </button>
            <button
              type="button"
              name="nPlayers"
              value="4"
              className={`player-btn${selected === "4" ? " selected" : ""}`}
              tabIndex="0"
              onClick={handleClick}
            >
              4
            </button>
            <button
              type="button"
              name="nPlayers"
              value="5"
              className={`player-btn${selected === "5" ? " selected" : ""}`}
              tabIndex="0"
              onClick={handleClick}
            >
              5
            </button>
            <button
              type="button"
              name="nPlayers"
              value="6"
              className={`player-btn${selected === "6" ? " selected" : ""}`}
              tabIndex="0"
              onClick={handleClick}
            >
              6
            </button>
          </div>
          <button
            type="submit"
            className="btn btn-red btn-large"
            tabIndex="0"
            id="playersSetBtn"
          >
            Go!!!
          </button>
        </form>
      </div>
    </Dialog>
  );
}
