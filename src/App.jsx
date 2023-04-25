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
    "Work on websites"
  ])

  return (
    <div className="App">
      this is app.jsx
      <ListItem item={itemList[0]} />
      <ListItem item={itemList[1]} />
      <ListItem item={itemList[2]} />
      <ListItem item={itemList[3]} />
      <ListItem item={itemList[4]} />
      </div>
  );
}

export default App;
