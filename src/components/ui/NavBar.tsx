import { ThemeProvider } from "../theme-provider"
import { ModeToggle } from "./mode-toggle"
import { useNavigate } from "react-router-dom"


export default function NavBar() {
  const navigate = useNavigate();

  const handleButtonClick = (externalLink: string) => {
    // Redirect to the external website
    window.location.href = externalLink;
  };

  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <div className="drop-shadow-xl rounded-sm flex justify-between outline outline-2 outline-slate-700 p-2">
      <h3 className="p-2 scroll-m-20 text-2xl font-semibold tracking-tight">
        <button onClick={() => { navigate('/') }}>Ganesh Revadi</button>
      </h3>
      <div className="flex flex-row">
        <div className="flex flex-row text-center justify-between">
          <h4 className="hover:text-lime-400 p-2 scroll-m-20 text-l font-semibold tracking-tight">
            <button onClick={() => { navigate('/readings') }}>Readings</button>
          </h4>
          <h4 className="hover:text-sky-400 p-2 scroll-m-20 text-l font-semibold tracking-tight">
            <button onClick={() => { navigate('/blogs') }}>Blogs</button>
          </h4>
          <h4 className="hover:text-orange-300 p-2 scroll-m-20 text-l font-semibold tracking-tight">
            <button onClick={() => { navigate('/about') }}>About</button>
          </h4>
        </div>
        <div>

          <button type="button" onClick={() => handleButtonClick('https://www.linkedin.com/in/ganesh-revadi/')} class="text-white bg-slate-700 hover:bg-[#0b66c2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-e">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </button>
          <button type="button" onClick={() => handleButtonClick('https://github.com/ganeshrevadi')} class="text-white bg-slate-700 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </button>
          <button type="button" onClick={() => handleButtonClick('https://twitter.com/ganeshrevadi16')} class="text-white bg-slate-700 hover:bg-[#0b66c2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-e">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16" fill="none" role="img" aria-labelledby="atf98a4ifs188ad3q9cbq2zt181u7ra1" class="octicon"><title id="atf98a4ifs188ad3q9cbq2zt181u7ra1">X</title>
              <path d="M9.52217 6.77143L15.4785 0H14.0671L8.89516 5.87954L4.76437 0H0L6.24656 8.8909L0 15.9918H1.41155L6.87321 9.78279L11.2356 15.9918H16L9.52183 6.77143H9.52217ZM7.58887 8.96923L6.95596 8.0839L1.92015 1.03921H4.0882L8.15216 6.7245L8.78507 7.60983L14.0677 14.9998H11.8997L7.58887 8.96957V8.96923Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
        <div className="pr-2">
          <ModeToggle />
        </div>
      </div>
    </div >
  </ThemeProvider >
}

