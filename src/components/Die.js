export default function Die(props) {
  return (
    <div className="die-container">
      <img className="die" src={`${props.roll}.png`} alt="" />
    </div>
  );
}
