import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './style/PokeCard.css'

const PokeCard = ({ pkinfo }) => {

    const [pokemon, getPokemon] = useFetch(pkinfo.url)

    useEffect(() => {
        getPokemon()
    }, [])


    const navegate = useNavigate()

    const handlePokeDetail = () =>{
        navegate(`/pokedex/${pkinfo.name}`)
    }


    return (
        <article className='card' onClick={handlePokeDetail}>
            <header className='card__header'>
                <img className='card__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <section className='card__principal'>
                <h3 className={`card__name color`}>{pokemon?.name}</h3>
                <ul className='card__types'>
                    {
                        pokemon?.types.map(typeInfo => (
                            <li className='card__type' key={typeInfo.type.url}>{typeInfo.type.name}</li>
                        ))
                    }
                </ul>
            </section>
            <hr className='card__hr'/>
            <section className='card__stats'>
                <ul className='card__list'>
                    {
                        pokemon?.stats.map(statInfo => (
                            <li className='card__stat' key={statInfo.stat.url}>
                                <span className='card__stat__label'>{statInfo.stat.name}</span>
                                <span className='card__stat__value'>{statInfo.base_stat}</span>

                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>
    )
}

export default PokeCard