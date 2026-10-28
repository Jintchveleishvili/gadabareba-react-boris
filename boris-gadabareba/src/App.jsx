import React from 'react';
import Counter from './Components/Counter';
import { ParentComponent } from './Components/ThemeContext';
import Optimization from './Components/Optimization';
import useLocalStorage from './Hooks/useLocalStorage';
import './App.css';

function App() {
  const [name, setName] = useLocalStorage('user_name', 'გიორგი');

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>React Hooks დავალება</h1>

      <div style={{ padding: '15px', border: '1px solid #ddd', marginBottom: '15px', borderRadius: '8px' }}>
        <h2>3.4 Custom Hook (useLocalStorage)</h2>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="ჩაწერეთ სახელი"
        />
        <p>შენახული სახელი (Local Storage): <strong>{name}</strong></p>
      </div>

      <Counter />
      <ParentComponent />
      <Optimization />
    </div>
  );
}

export default App;