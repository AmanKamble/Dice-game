import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GamePage from "./Components/GamePage.jsx"
import Playow from "./Components/Playow.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GamePage />} />
        <Route path='/playnow' element={<Playow />} />
      </Routes>
    </Router>
  )
}

export default App
