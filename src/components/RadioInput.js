import { useState } from "react";

export default function RadioInput(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  //   function handleChange() {
  //     setIsChecked(true);
  //   }

  return (
    <>
      <label
        htmlFor={props.htmlFor}
        tabIndex="0"
        className={`label-btn${props.selected === "2" ? " checked" : ""}`}
      >
        {props.value}
      </label>
      <input
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        checked={props.selected === props.value}
        required={props.required}
        onChange={props.handleChange}
      />
    </>
  );
}
