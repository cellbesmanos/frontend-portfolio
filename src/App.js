import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App container">
      <Outlet />
    </div>
  );
}

export default App;
