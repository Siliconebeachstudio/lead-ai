import DashboardNavbar from "@/components/DashboardNavbar"
import { Toaster } from "react-hot-toast"


export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className='flex  flex-col f-full w-full'>
     <DashboardNavbar/>
      
 {children}
      <Toaster/>
    </div>
  )
}