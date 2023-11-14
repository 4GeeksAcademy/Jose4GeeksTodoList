import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>todos</h1>
      <div className="shadow">
        <ul>
          <li className="textBox">
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
        <div className="task">{todos.length} tasks left</div>
        </div>
        
        <div className="page"></div>
        <div className="page2"></div>
    </div>
  );
};

export default Home;
