import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import './styles/PokeDetailPage.css'

const PokeDetailPage = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [name])

  console.log(pokemon);

  return (
    <div className='detail_container'>

      <div className='detail__content-ico'>
        <header className='detail__header'>
          <img className='detail__ico' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <div className='pokemon-info'>
          <h2 className='pokemon-name'>{pokemon?.name}</h2>
          <hr />
          <section className='pokemon-characteristics'>

            <ul className='characteristics__list'>
              <li className='characteristics__items'>
                <span className='characteristics__label'>Height</span>
                <span className='characteristics__value'>{pokemon?.height}</span>
              </li>
              <li className='characteristics__items'>
                <span className='characteristics__label'>Weight</span>
                <span className='characteristics__value'>{pokemon?.weight}</span>  
              </li>
            </ul>

          </section>
          <article>
            <section>

            </section>
            <section>

            </section>
          </article>
        </div>
      </div>

      <div className='detail__content-movements'>
        <h2 className='movements__title'>Movements</h2>
      </div>

    </div>
  )
}

export default PokeDetailPage