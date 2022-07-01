import './App.css';
import Board from './components/Board';
import { useDispatch, useSelector } from 'react-redux';
import './styles/fonts/font.css';
import '../src/styles/Board.css'

function App() {
  let state = useSelector((state) => (state.data));

  return (
    <div className="appContainer">
      <h1>ToDoList</h1>
      <div style={{ display: "flex" }} >
        {state.map((el, i) => (
          <Board title={el.title} cards={el.cards} key={el.id} />
        ))}
        <div className="addList">
          <span>+ Add a list</span>
        </div>
      </div>
    </div>
  );
}

export default App;
