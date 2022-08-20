import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import six from "../images/6.png";

export default function Die(props) {
  let showDie;
  switch (props.roll) {
    case 1:
      showDie = one;
      break;
    case 2:
      showDie = two;
      break;
    case 3:
      showDie = three;
      break;
    case 4:
      showDie = four;
      break;
    case 5:
      showDie = five;
      break;
    case 6:
      showDie = six;
      break;
    default:
      showDie = null;
  }
  return (
    <div className="die-container">
      <img className="die" src={showDie} alt="" />
    </div>
  );
}
