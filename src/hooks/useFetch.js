import axios from "axios"
import { useState } from "react"

const useFetch = url => {

    const [response, setResponse] = useState()
    const [isLoading, setIsLoading] = useState(true);

    const getApi =() => {
        axios.get(url)
        .then(r => {
            setResponse(r.data)  
        })
        .catch(er =>console.log(er))
        .finally(() => setIsLoading(false))
    }

    const getApiTypes = (urlType) =>{
        axios.get(urlType)
        .then(res => {

            setTimeout(() => {
                    
                const obj = {
                    results: res.data.pokemon.map(poke =>poke.pokemon)
                }
                setResponse(obj)
            }, 5000);

            
        })
        .finally(() => setIsLoading(false))
    }

    return [response, getApi, getApiTypes, isLoading]
}

export default useFetch