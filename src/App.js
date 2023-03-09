import logo from './logo.svg';
import './App.css';
import { Node, LinkedList } from './linked-list';
function App() {
  const newLinkedList = new LinkedList();
  // newLinkedList.push(12);
  // newLinkedList.push(1);
  // newLinkedList.push(11);

  newLinkedList.unshift(40);
  newLinkedList.unshift(30);
  newLinkedList.unshift(20);
  newLinkedList.unshift(10);
  newLinkedList.average();
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
