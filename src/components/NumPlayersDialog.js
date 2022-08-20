import { useEffect, useState } from "react";
import Dialog from "./Dialog";
import "../styles/NumPlayersDialog.css";

export default function NumPlayersDialog(props) {
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
    props.setNumPlayers(() => parseInt(selected));
    props.setShowDialog(false);
  }

  return (
    <Dialog>
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
          className="btn btn-red"
          tabIndex="0"
          id="playersSetBtn"
        >
          Go!!!
        </button>
      </form>
    </Dialog>
  );
}

{
  /*
          <div>
            <label
              htmlFor="2players"
              tabIndex="0"
              className={`label-btn${selected === "2" ? " selected" : ""}`}
            >
              2
            </label>
            <input
              type="radio"
              name="nPlayers"
              id="2players"
              value="2"
              required
              selected={selected === "2"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="3players"
              tabIndex="0"
              className={`label-btn${selected === "3" ? " selected" : ""}`}
            >
              3
            </label>
            <input
              type="radio"
              name="nPlayers"
              id="3players"
              value="3"
              selected={selected === "3"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="4players"
              tabIndex="0"
              className={`label-btn${selected === "4" ? " selected" : ""}`}
            >
              4
            </label>
            <input
              type="radio"
              name="nPlayers"
              id="4players"
              value="4"
              selected={selected === "4"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="5players"
              tabIndex="0"
              className={`label-btn${selected === "5" ? " selected" : ""}`}
            >
              5
            </label>
            <input
              type="radio"
              name="nPlayers"
              id="5players"
              value="5"
              selected={selected === "5"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="6players"
              tabIndex="0"
              className={`label-btn${selected === "6" ? " selected" : ""}`}
            >
              6
            </label>
            <input
              type="radio"
              name="nPlayers"
              id="6players"
              value="6"
              selected={selected === "6"}
              onChange={handleChange}
            />
          </div> */
}
