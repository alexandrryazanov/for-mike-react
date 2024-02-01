import React, { useState } from "react";
import TestComponent1 from "./components/TestUseQuery/TestComponent1";
import TestComponent2 from "./components/TestUseQuery/TestComponent2";

function App() {
  const [visibleComponent, setVisibleComponent] = useState<
    number | undefined
  >();
  return (
    <>
      <button onClick={() => setVisibleComponent(1)}>Component 1</button>
      <button onClick={() => setVisibleComponent(2)}>Component 2</button>
      {visibleComponent === 1 && <TestComponent1 />}
      {visibleComponent === 2 && <TestComponent2 />}
    </>
  );
}

export default App;
