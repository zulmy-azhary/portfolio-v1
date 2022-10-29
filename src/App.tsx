import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Content, Cursor, Loader, Navbar } from "components/main";

const App: React.FC = () => {
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
};
export default App;
