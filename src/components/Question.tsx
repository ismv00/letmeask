import cx from "classnames";
import { QuestionProps } from "interfaces/QuestionTypes";
import "../styles/questions.scss";

export function Question({
  author,
  children,
  content,
  isAnswered = false,
  isHighLighted = false
}: QuestionProps) {
  return (
    <div
      className={cx(
        // Utilizando o pacote classnames do npm para criar as condicoes nas classes
        "question",
        { answered: isAnswered },
        { highLighted: isHighLighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
