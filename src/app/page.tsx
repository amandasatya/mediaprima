import Image from "next/image";
import SideBar from "./sidebar/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
   <div className="flex">
    <SideBar/>
    <Dashboard/>
   </div>
  )
}
