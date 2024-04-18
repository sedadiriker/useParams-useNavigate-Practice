import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonDetail from "./pages/PersonDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<PersonDetail />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
