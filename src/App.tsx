import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Profile from "./pages/Profile"
import Blogs from "./pages/Blogs"
import Readings from "./pages/Readings"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Profile />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/readings" element={<Readings />} />
    </Routes>
  </BrowserRouter>

}


export default App
