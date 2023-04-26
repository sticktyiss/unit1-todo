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

  // const itemsDisplay = []
  // for (let i = 0; i < itemList.length; i++) {
  //   itemsDisplay.push(<ListItem item={itemList[i]} />)
  // }

  return (
    <div className="App">
      this is app.jsx
      {itemList.map((task, index) => {
        return <ListItem item={task} key={index} />;
      })}
    </div>
  );
}

export default App;
