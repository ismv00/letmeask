import { useEffect, useState } from "react";

import { FirebaseQuestions, QuestionType } from "interfaces/RoomTypes";
import { database } from "services/firebase";

import { UseAuth } from "./useAuth";

export function useRoom(roomId: string) {
  const { user } = UseAuth();
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
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              // eslint-disable-next-line
              ([key, like]) => like.authorId === user?.id
            )?.[0]
          };
        }
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });

    return () => {
      roomRef.off("value");
    };
  }

  useEffect(() => {
    renderQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, user?.id]);

  return { questions, title };
}
