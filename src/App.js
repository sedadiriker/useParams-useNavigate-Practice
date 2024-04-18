import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListeningEvent from "./pages/ListeningEvent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/listeningevent" element={<ListeningEvent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
