import { useState } from "react";

export default function Messages({ topMessage, bottomMessage }) {
  return (
    <div className="messages">
      <h2>{topMessage}</h2>
      <h3>{bottomMessage}</h3>
    </div>
  );
}
