import { useEffect, useState } from "react";

import { FirebaseQuestions, QuestionType } from "interfaces/RoomTypes";
import { database } from "services/firebase";

export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState("");

  function renderQuestions() {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighLighted,
            isAnswered: value.isAnswered
          };
        }
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }

  useEffect(() => {
    renderQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return { questions, title };
}
