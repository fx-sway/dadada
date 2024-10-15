import React from "react"
import AdminSidebar from "./components/admin-sidebar"

interface Properties {
  children: React.ReactNode
}

export default function AdminLayout({ children }: Readonly<Properties>) {
  return (
    <div className="w-full h-dvh flex flex-row">
      <AdminSidebar />
      <main>{children}</main>
    </div>
  )
}
