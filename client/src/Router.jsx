import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/"
  }
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router;