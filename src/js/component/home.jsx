import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            placeholder="What do you need to do?"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <FontAwesomeIcon
              icon={faX}
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index !== currentIndex)
                )
              }
              style={{ color: "#ff0000" }}
			  className="faIcon"
            />
          </li>
        ))}
      </ul>
      <div>{todos.length} tasks</div>
    </div>
  );
};

export default Home;
