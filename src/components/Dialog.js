import "../styles/Dialog.css";

export default function Dialog(props) {
  return (
    <div className="modal-outer">
      <div className="modal-inner">{props.children}</div>
    </div>
  );
}
