// src/App.jsx
import React, { useState } from 'react';
import Home from './home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
