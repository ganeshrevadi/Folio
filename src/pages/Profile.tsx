import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/ui/NavBar"
import logo from "@/assets/Profile.jpeg"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function Profile() {

  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="p-3 flex flex-col justify-between">
    <BackgroundBeams/>
      <NavBar />

      <div className="text-center p-5 pt-10">
        <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl text-[#666d78]">
          About Me
        </h1>
      </div>
      <div className="flex flex-row justify-center p-7 ">
        <img className="rounded-full w-96 h-96 ring-2 ring-slate-400 " src={logo} alt="image description" />

        <div className="p-10 flex flex-col">
          <h3 className="p-5 scroll-m-20 text-2xl font-semibold tracking-tight text-[#698bcf]">
            Hey ! I'm Ganesh Revadi
          </h3>
          <blockquote className="mt-6 border-l-2 pl-6 italic text-[#666d78]">
            "My passion for computer science fuels my proficiency in full-stack web development, utilizing <b className="text-[#61dbfb]">React</b> with <b className="text-[#007acc]">TypeScript</b> for interfaces and <b className="text-[#68A063]">Node.js</b> with <b className="text-[#F0DB4F]">ExpressJS</b> for server-side functionality. My skills extends to <b className="text-[#336791]">PostgreSQL</b> and <b className="text-slate-500">Prisma</b> for efficient database management, while <b className="text-[#06b6d4]">Tailwind CSS</b> ensures precise and visually striking design."
          </blockquote>
        </div>
      </div>
      
    </div>
    
  </ThemeProvider>
}
