import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <div>Hello World!</div>;
}

export default App;

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
