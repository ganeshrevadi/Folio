import NavBar from "@/components/ui/NavBar";
import Projectcard from "@/components/ui/Projectcard";

export default function Projects() {
  return <div className="p-3 flex flex-col justify-between">
    <NavBar />
    
    <div className=" p-5 pt-10">
      <h1 className="text-center scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl text-[#666d78]">
          Projects
        </h1>
        <div className="pl-7 ">
          <Projectcard title={"Sasta Medium"} desc={"Sasta-Medium is a blogging platform built with React and TypeScript for an intuitive frontend, and Hono CloudFlare Workers for efficient backend operations. It uses PostgreSQL with Prisma for database management and JWT for secure authentication, offering a fast, scalable, and secure environment for bloggers."} link={"https://www.github.com/ganeshrevadi/Sasta-Medium"} deploy={"https://sasta-medium.vercel.app/"} />
          <Projectcard title={"PayTm MatKaro"} desc={"Backend implementation for managing financial transactions in your contacts. Built with React (frontend), Node.js, Express (backend), and MongoDB (database). Streamline and secure your financial processes with this tech-savvy solution."} link={"https://www.github.com/ganeshrevadi/PayTm-MatKaro"} deploy={"https://pay-tm-mat-karo-6tc7.vercel.app/"} />
          <Projectcard title={"RealTime Chat"} desc={"Real-time messaging web-app with a sleek React frontend and Appwrite backend, offering instant messageing."} link={"https://www.github.com/ganeshrevadi/Chat-RealTime"} deploy={"https://www.github.com/ganeshrevadi/Chat-RealTime"} />

        </div>
      </div>
  </div>
}
