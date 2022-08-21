import { useContext, useEffect } from 'react';
import './App.css';
import { Content, Navbar } from './components/layout';
import { ToggleContext } from './context';

function App() {
  const { isOpen } = useContext(ToggleContext);

  useEffect(() => {
    document.title = "Zulmy Azhary | Front End Developer";
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className={`transition-all duration-500 fixed inset-y-0 left-0 bg-primary-900/20 backdrop-blur-sm z-10 ${isOpen ? "w-1/4 md:w-1/2 lg:w-8/12" : "w-0 opacity-0"}`} />
      <Content />
    </div>
  );
}

export default App;
