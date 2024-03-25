import axios from "axios"
import { useState } from "react"

const useFetch = url => {
  
    const [responsive, setResponsive] = useState()

    const getApi =() => {
        axios.get(url)
        .then(r => {
            setResponsive(r.data)
        })
        .catch(er =>console.log(er))
    }

    const getApiTypes = () =>{
        axios.get(urlType)
        .then(res => {
            const obj = {
                result: res.data.pokemon.map(poke =>poke.pokemon)
            }

            setResponsive(obj)
        })
    }

    return [responsive, getApi, getApiTypes]
}

export default useFetch