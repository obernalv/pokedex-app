import axios from "axios"
import { useState } from "react"

const useFetch = url => {

    const [response, setResponse] = useState()
    const [isLoading, setIsLoading] = useState(true);

    const getApi =() => {
        setIsLoading(true)
        axios.get(url)
        .then(r => {
            setResponse(r.data)
        })
        .catch(er =>console.log(er))
        .finally(() => setIsLoading(false))
    }

    const getApiTypes = (urlType) =>{
        setIsLoading(true)
        axios.get(urlType)
        .then(res => {

            const obj = {
                results: res.data.pokemon.map(poke =>poke.pokemon)
            }
            setResponse(obj)

            
        })
        .finally(() => setIsLoading(false))
    }

    return [response, getApi, getApiTypes, isLoading]
}

export default useFetch