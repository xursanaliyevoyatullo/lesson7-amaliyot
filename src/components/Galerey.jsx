import { MdFileDownload } from "react-icons/md"
import { Link } from "react-router-dom"

function Galerey({ data: { results } }) {
  return <div className="galerey">
    <ul>
      {results.slice(0, 9).map((image) => {
        return (
          <li key={image.id}>
            <Link to={`/image/${image.id}`}>
              <img className="rounded w-[400px] h-[350px]" src={image.urls.regular} alt="" />
            </Link>
            <div className="flex items-center justify-between">
              <a
                className="download text-xl"
                href={image.links.download}
                download>
                {<MdFileDownload />}
              </a>

              <button className="liked mb-3 mt-1">💖</button>
            </div>
          </li>
        )
      })}
    </ul>
  </div >
}

export default Galerey