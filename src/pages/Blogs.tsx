import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/ui/NavBar"


export default function Blogs() {
  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="p-3 flex flex-col justify-between">
      <NavBar />
      <div className="text-center p-5 pt-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          BLOGS
        </h1>
      </div>
      <div className="text-center p-5 pt-15">
        <div className="flex flex-row justify-center">
          <h4 className="p-5 scroll-m-20 text-xl font-semibold tracking-tight">
            People stopped telling jokes
          </h4>
          <blockquote className="mt-6  pl-6 italic">
            23 JAN , MONADY
          </blockquote>
        </div>
        <div className="flex flex-row justify-center">
          <h4 className="p-5 scroll-m-20 text-xl font-semibold tracking-tight">
            People stopped telling jokes
          </h4>
          <blockquote className="mt-6  pl-6 italic">
            23 JAN , MONADY
          </blockquote>
        </div>
        <div className="flex flex-row justify-center">
          <h4 className="p-5 scroll-m-20 text-xl font-semibold tracking-tight">
            People stopped telling jokes
          </h4>
          <blockquote className="mt-6  pl-6 italic">
            23 JAN , MONADY
          </blockquote>
        </div>
      </div>

    </div>
  </ThemeProvider>
}
