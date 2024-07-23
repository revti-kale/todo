import { useState } from "react";
import "./App.css";
import UserInput from "./components/userInput";
import Todolist from "./components/TodoList";

function App() {
  const [addListTodo, setAddListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") {
      setAddListTodo([...addListTodo, inputText]);
    } else {
      alert("Add Todo Items");
    }
  };

  let handleDelete = (key) => {
    let newArrayList = [...addListTodo];
    newArrayList.splice(key, 1);
    setAddListTodo([...newArrayList]);
  };
  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <UserInput addList={addList} />
          <h1 className="app-heading">TODO</h1>
          <hr />
          {addListTodo.map((listItem, index) => {
            return (
              <Todolist
                key={index}
                index={index}
                item={listItem}
                deleteItem={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
