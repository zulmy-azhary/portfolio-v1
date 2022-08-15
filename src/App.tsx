import { useEffect } from 'react';
import './App.css';
import { Content, Navbar } from './components/layout';

function App() {
  useEffect(() => {
    document.title = "Zulmy Azhary | Front End Developer";
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
