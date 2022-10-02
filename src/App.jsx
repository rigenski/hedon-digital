import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
