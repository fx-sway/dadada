import Image from "next/image"
import VercelLight from "../../../../../public/vercel-light.svg"
import { Triangle } from "lucide-react"

export default function AdminSidebarHeader() {
  return (
    <header className="h-16">
      <Triangle className="w-6 h-6 mr-2" />
      <h4 className="font-bold">Prisma</h4>
    </header>
  )
}
