import { useState } from "react";

function StudentCard(props) {
  const [likes, setLikes] = useState(0);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>

      <p>Likes: {likes}</p>

      <button onClick={() => setLikes(likes + 1)}>
        Like 👍
      </button>
    </div>
  );
}

export default StudentCard;