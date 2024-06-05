import { ThemeProvider } from "../theme-provider"
import { ModeToggle } from "./mode-toggle"
import { useNavigate } from "react-router-dom"


export default function NavBar() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="drop-shadow-xl rounded-sm flex justify-between border-b-2 border-slate-700 p-2">
        <h3 className="p-2 scroll-m-20 text-2xl font-semibold tracking-tight text-[#698bcf]">
          <button onClick={() => { navigate('/') }}>Ganesh Revadi</button>
        </h3>
        <div className="flex flex-row">
          <div className="flex flex-row text-center justify-between space-x-4">
            <h4 className="hover:text-lime-400 p-2 scroll-m-20 text-l font-semibold tracking-tight">
              <button onClick={() => { navigate('/projects') }}>Projects</button>
            </h4>
            <h4 className="hover:text-sky-400 p-2 scroll-m-20 text-l font-semibold tracking-tight">
              <button onClick={() => { navigate('/blogs') }}>Blogs</button>
            </h4>
            <h4 className="hover:text-orange-300 p-2 scroll-m-20 text-l font-semibold tracking-tight">
              <button onClick={() => { navigate('/about') }}>About</button>
            </h4>
          </div>
          <div className="pr-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
  
}

