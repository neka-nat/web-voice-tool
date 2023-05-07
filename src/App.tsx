import React from 'react';
import './App.css';
import Recorder from './components/Recorder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>音声録音アプリ</h1>
        <Recorder />
      </header>
    </div>
  );
}

export default App;
