export const AppRoutes = {
  root: {
    name: "Root",
    to: "/",
    href: "/",
  },
  auth: {
    login: {
      name: "Login",
      to: "/login",
      href: "/login",
    },
    register: {
      name: "Register",
      to: "/register",
      href: "/register",
    },
  },
  home: {
    name: "Home",
    to: "/home",
    href: "/home",
  },
  demo: {
    basicTableViewer: {
      name: "BasicTable Viewer",
      to: "/demo/basic-table-viewer",
      href: "/demo/basic-table-viewer",
    },
  },
  error404: {
    name: "Page 404",
    to: "/page-404",
    href: "/page-404",
  },
}

export const DefaultUserRouter = AppRoutes.auth.login.to;