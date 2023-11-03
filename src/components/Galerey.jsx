import { Link } from "react-router-dom"

function Galerey({ data: { results } }) {
  return <div className="galerey">
    <ul>
      {results.slice(0, 9).map((image) => {
        return (
          <li key={image.id}>
            <Link to="/image">
              <img className="m-auto" src={image.urls.regular} alt="" />
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
}

export default Galerey