import { RoomCodeProps } from "interfaces/RoomCodeTypes";

import copyimg from "../assets/images/copy.svg";

import "../styles/roomCode.scss";

export function RoomCode(props: RoomCodeProps) {
  const { code } = props;
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }
  return (
    <button
      type="button"
      className="room-code"
      onClick={copyRoomCodeToClipboard}
    >
      <div>
        <img src={copyimg} alt="Copy room code" />
      </div>

      <span>Sala #{code}</span>
    </button>
  );
}
