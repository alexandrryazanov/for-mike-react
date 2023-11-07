import React, { useState } from "react";
import ThemeProvider from "./contexts/ThemeContext/provider";
import Button from "./components/Button";
import TestTheme from "./components/TestTheme";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <ThemeProvider>
      <div>
        <TestTheme />
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
      </div>
      <Modal
        open={modalOpen}
        onOkClick={() => setModalOpen(false)}
        onClose={() => setModalOpen(false)}
        actionsVisible={true}
      >
        test
      </Modal>
    </ThemeProvider>
  );
}

export default App;
