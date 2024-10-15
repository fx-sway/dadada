import React from "react"
import { cn } from "@/utils/utils"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Properties extends React.HTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export default function AdminSidebarSearch({
  className,
  placeholder,
}: Readonly<Properties>) {
  return (
    <div
      className={cn(
        "flex flex-row items-center border rounded-md bg-muted px-3 py-1",
        className
      )}
    >
      <Search className="w-5 h-5 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        className="border-none bg-transparent focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0"
      />
    </div>
  )
}
