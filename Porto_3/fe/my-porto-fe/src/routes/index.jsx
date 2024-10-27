import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages/home";
import Profile from "../pages/profile";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/informations",
      element: <Profile />,
    },
  ]);
  return <RouterProvider router={router} />;
}
