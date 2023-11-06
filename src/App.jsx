import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"

//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/ErrorPage"
import Image from "./pages/Image"
import Liked from "./pages/Liked"


function App() {

  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "/image/:id",
          element: <Image />
        },
        {
          path: "liked",
          element: <Liked />
        }
      ]
    }
  ])

  return <RouterProvider router={roots} />
}

export default App