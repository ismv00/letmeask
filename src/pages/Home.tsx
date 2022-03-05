import { useState, FormEvent } from "react";

import { useNavigate } from "react-router-dom";

import googleIconImg from "../assets/images/google-icon.svg";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import "../styles/auth.scss";
import { UseAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

export function Home() {
  const navigate = useNavigate();
  const { signInWithGoogle, user } = UseAuth();
  const [roomCode, setRoomCode] = useState("");

  async function HandleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      // todo: this should be an modal dialog instead of alert
      //   return "Roomm does not exists.";
    }

    navigate(`/rooms/${roomCode}`);
  }
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button
            type="button"
            onClick={HandleCreateRoom}
            className="create-room"
          >
            <img src={googleIconImg} alt="iconGoogle" />
            Crie sua sala com o google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
