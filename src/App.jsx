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
  const [inputVal, setInputVal] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setItemList([...itemList, inputVal]);
    setInputVal("");
  };

  const removeItemFromList = (index) => {
    itemList.splice(index, 1);
    setItemList([...itemList]);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>

      <form onSubmit={(e) => submitHandler(e)}>
        <input
          placeholder="Write task here..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button>Add</button>
      </form>
      {itemList.map((task, index) => (
        <ListItem
          item={task}
          key={index}
          index={index}
          removeItemFromList={removeItemFromList}
        />
      ))}
    </div>
  );
}

export default App;
