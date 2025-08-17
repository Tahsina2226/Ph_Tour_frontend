import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import AdminLayout from "../components/AdminLayout";
import Analytics from "../pages/Analytics";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        path: "analytics",
        Component: Analytics,
      },
    ],
  },
]);

export default router;
