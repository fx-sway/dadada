"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

interface NavigationItem {
  icon: any | undefined
  label: string
  linkTo: string
}

interface Properties {
  items: NavigationItem[]
}

export default function AdminSidebarNavigation({
  items,
}: Readonly<Properties>) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-2">
      {items.map((item) => {
        return (
          <Button
            variant={pathname === item.linkTo ? "secondary" : "ghost"}
            className="flex flex-row items-center text-start justify-start"
            asChild
          >
            <Link href={item.linkTo} className="flex flex-row items-center">
              {item.icon && <item.icon className="w-4 h-4 mr-2" />}
              <span className="font-semibold tracking-[0.02em]">
                {item.label}
              </span>
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}
