import { useState } from "react"
import Galerey from "../components/Galerey"
import Search from '../components/Search'
import { useFetch } from "../hooks/useFetch"

const API = 'https://api.unsplash.com/search/photos?client_id=Fkqdx4hhg-PiWkXTTyvja3Q241c5twL2XN2G9-zF1ZM&page=1&query='


function Home() {
    const [url, setUrl] = useState(API + 'laptop')
    const { data, isPending, error } = useFetch(url)

    const setNewUrl = (url) => {
        setUrl(API + url)
    }

    return (
        <div>
            <h1 className="mb-4 font-bold text-xl mt-28">Search Any Image:</h1>
            <Search setNewUrl={setNewUrl} />
            {data && <Galerey data={data} />}
            {isPending && <h1 className="text-center mt-5 mb-5 font-bold text-xl">Loading...</h1>}
            {error && <h1>{error}</h1>}
        </div>
    )
}

export default Home