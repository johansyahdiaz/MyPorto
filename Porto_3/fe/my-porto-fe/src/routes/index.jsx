import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages/home";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
  ]);
  return <RouterProvider router={router} />;
}
