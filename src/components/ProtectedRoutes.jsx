import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function ProtectedRoutes({ children }) {
    const { user } = useSelector((state) => state.liked)
    if (user) {
        return children
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoutes