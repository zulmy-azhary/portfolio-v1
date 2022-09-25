import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Content, Cursor, Loader, Navbar } from './components';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  
  return (
    <>
      {/* <AnimatePresence mode="wait">
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence> */}
      <Cursor />
      <Navbar />
      <Content />
    </>
  );
}