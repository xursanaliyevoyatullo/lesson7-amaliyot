import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { useEffect } from "react"

//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/ErrorPage"
import Image from "./pages/Image"
import Liked from "./pages/Liked"
import Login from "./pages/Login"

//firebase 
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/firebaseConfig"

import { useDispatch } from "react-redux"
import { userSetting } from "./redux/features/likedSlice"

import ProtectedRoutes from "./components/ProtectedRoutes"

function App() {
  const roots = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <ProtectedRoutes><RootLayout /></ProtectedRoutes>,
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
            },
          ],
        },
        {
          path: "login",
          element: <Login />
        }
      ]
    }
  ])

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (info) => {
      dispatch(userSetting(info));
    })
  }, [])

  return <RouterProvider router={roots} />
}

export default App