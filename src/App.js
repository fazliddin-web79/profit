import { Route, Routes } from "react-router-dom";
import HomeBody from "./components/homeBody";
import Navbar from "./components/navbar";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />} path="/">
        <Route path="/" element={<HomeBody />} />
      </Route>
    </Routes>
  );
}

export default App;
