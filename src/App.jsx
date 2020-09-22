import React, { useState } from 'react';
import StreamsList from './components/StreamsList'
import './styles/App.css';
import 'bulma/css/bulma.css'


function App() {
  const [streams, setStreams] = useState([])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ping Things Streams!</h1>
      </header>
      <section>
        <StreamsList streams={streams} />
      </section>
    </div>
    
  );
}

export default App;
