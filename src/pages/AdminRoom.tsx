import { Question } from "components/Question";
import { useRoom } from "hooks/useRoom";
import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { RoomParams } from "../interfaces/RoomTypes";
import "../styles/room.scss";

export function AdminRoom() {
  //   const { user } = UseAuth();
  const params = useParams<RoomParams>();
  //   const [newQuestion, setNewQuestion] = useState("");
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  //   async function handleSendQuestion(event: FormEvent) {
  //     event.preventDefault();
  //     if (newQuestion.trim() === "") {
  //       return;
  //     }

  //     if (!user) {
  //       throw new Error("You must be logged in");
  //     }

  //     const question = {
  //       content: newQuestion,
  //       author: {
  //         name: user.name,
  //         avatar: user.avatar
  //       },
  //       isHighLighted: false,
  //       isAnswered: false
  //     };

  //     await database.ref(`rooms/${roomId}/questions`).push(question);

  //     setNewQuestion("");
  //   }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button IsOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
