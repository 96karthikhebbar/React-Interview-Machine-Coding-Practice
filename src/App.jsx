import { useState } from 'react';
import './App.css';
import PhoneOtpForm from './components/PhoneOtpForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2 className="header">Login With Phone</h2>
      <PhoneOtpForm />
    </div>
  );
}

export default App;
