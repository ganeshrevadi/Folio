import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Profile from "./pages/Profile"
import Blogs from "./pages/Blogs"
import Projects from "./pages/Projects"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Profile />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>

}


export default App
