import logo from "./logo.svg";
import "./App.css";
import ListItem from "./ListItem";
import { useState } from "react";

function App() {
  const [itemList, setItemList] = useState([
    "Buy eggs",
    "Finish cleaning room",
    "Plan proposal",
    "Play games",
    "Work on websites",
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    setInputVal("");
  }
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="App">
      <h1>To Do List</h1>

      <form onSubmit={submitHandler}>
        <input
          placeholder="Write task here..."
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={() => setItemList([...itemList, inputVal])}>
          Add
        </button>
      </form>
      {itemList.map((task, index) => {
        return <ListItem item={task} key={index} />;
      })}
    </div>
  );
}

export default App;
