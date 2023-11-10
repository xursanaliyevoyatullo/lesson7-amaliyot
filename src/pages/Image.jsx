import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

function Image() {
  const [photo, setPhoto] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const url = `https://api.unsplash.com/photos/${id}`;
    axios
      .get(url, {
        headers: {
          Authorization: `Client-ID ${`Fkqdx4hhg-PiWkXTTyvja3Q241c5twL2XN2G9-zF1ZM`}`,
        },
      })
      .then((response) => {
        setPhoto(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="mx-full mt-10 flex gap-7 items-center justify-between">
      {photo && <>
        <img
          key={id}
          className="rounded-xl w-[450px] h-[450px]"
          src={photo.urls.regular}
          alt="" />
        <div>
          <p className="text-xl font-bold mb-1">ID: <span className="font-mono">{photo.id}</span></p>
          <h2 className="text-xl mb-1"><span className="font-bold mb-3">Created:</span> {photo.created_at}</h2>
          <h2 className="text-xl mb-1">
            <span className="font-bold text-xl">Description: </span>
            {photo.alt_description}
          </h2>
          <h2 className="mb-5"><span className="text-xl font-bold">Likes:</span> {photo.likes},</h2>
          <div className="flex gap-5">

            <NavLink className="btn btn-outline btn-secondary" to="/">Go Home</NavLink>
          </div>
        </div>
      </>}
    </div>
  )
}

export default Image