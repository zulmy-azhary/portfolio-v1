import './App.css';
import { Content, Navbar } from './components/layout';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

// sm = (min-width: 640px)
// md = (min-width: 768px)
// lg = (min-width: 1024px)
// xl = (min-width: 1280px)
// 2xl = (min-width: 1536px)