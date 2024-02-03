import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2 className="header">Login With Phone</h2>
    </div>
  );
}

export default App;
