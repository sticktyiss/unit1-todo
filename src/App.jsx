import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

function App() {
  return (
    <div className="App">
      this is app.jsx
      <ListItem item='Buy eggs'/>
      <ListItem item='Finish cleaning room'/>
      <ListItem item='Plan proposal'/>
      <ListItem item='Play games'/>
      <ListItem item='Work on websites'/>
    </div>
  );
}

export default App;
