"use client"

import {
  Users,
  Smile,
  Archive,
  StarIcon,
  LayoutGrid,
  NotepadText,
  FlaskConical,
} from "lucide-react"
import AdminSidebarSearch from "./admin-sidebar-search"
import AdminSidebarNavigation from "./admin-sidebar-navigation"
import AdminSidebarHeader from "./admin-sidebar-header"

export default function AdminSidebar() {
  return (
    <aside className="p-4 w-full max-w-xs h-screen flex flex-col gap-2">
      <AdminSidebarHeader />

      <AdminSidebarSearch
        placeholder="Поиск по приложению"
        className="cursor-pointer hover:ring-1 hover:ring-ring hover:ring-offset-2 transition-all"
      />

      <p className="mt-2 text-xs font-semibold text-muted-foreground">
        Навигация по приложению
      </p>
      <AdminSidebarNavigation
        items={[
          {
            icon: LayoutGrid,
            label: "Панель управления",
            linkTo: "/www/admin",
          },
          {
            icon: NotepadText,
            label: "Анкетирование",
            linkTo: "/www/admin/forms",
          },
          {
            icon: FlaskConical,
            label: "Тестирование",
            linkTo: "/www/admin/tests",
          },
          {
            icon: Smile,
            label: "Характеристика",
            linkTo: "/www/admin/summary",
          },
          {
            icon: StarIcon,
            label: "Подразделения",
            linkTo: "/www/admin/divisions",
          },
          {
            icon: Users,
            label: "Личный состав",
            linkTo: "/www/admin/personnel",
          },
          {
            icon: Archive,
            label: "Архив данных",
            linkTo: "/www/admin/archive",
          },
        ]}
      />
    </aside>
  )
}
