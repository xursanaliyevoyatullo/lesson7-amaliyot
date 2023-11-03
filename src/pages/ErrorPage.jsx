import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()

    if(error.status === 404) {
        return (
            <div>
                <h1>Page Not Found</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }


  return <div>ErrorPage</div>
}

export default ErrorPage