import {LuGlobe} from "react-icons/lu";
import {AppRoutes} from "./router.js";

const iconClassName = "text-2xl";
export const UserNav = [
  {
    component: "title",
    name: "USER"
  },
  {
    component: "item",
    name: "Profile",
    to: "/profile",
    icon: "👤",
  },
  {
    component: "group",
    name: "Testing",
    to: "/base",
    icon: <LuGlobe className={iconClassName}/>,
    items: [
      {...AppRoutes.auth.login, component: "item"},
      {...AppRoutes.auth.register, component: "item"},
    ]
  },
]