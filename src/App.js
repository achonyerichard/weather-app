import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Search />} path="/search" />
    </Routes>
  );
}

export default App;
