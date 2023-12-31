import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";

function App() {
    return (
        <>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/archive" element={<Archive />} />
            </Routes>
        </>
    );
}

export default App;
