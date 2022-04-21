import './App.css';
import View from './View';

const blocks = [
  {
    id: 'b1',
    block: 'yellow',
  },
  {
    id: 'b2',
    block: 'green',
  },
  {
  id: 'b4',
  block: `${Math.random()}`,
  },
  {
  id: 'b3',
  block: 'color',
  },
];


function App() {
  return (
    <div className="App">
      <View items = {blocks}/>
      
    </div>
  );
}

export default App;

