import { useState } from 'react'
import Paginacion from './Paginacion'
import PokeCard from './PokeCard'
import './style/ListPokemons.css'
import Page404 from './Page404'

const ListPokemons = ({ pokemons }) => {

  //paginacion
  const [pagina, setPagina] = useState(1)
  const [xPagina, setXPagina] = useState(6)

   //const maximo = Math.floor(pokemons?.length / xPagina)
  const maximo = Math.ceil(pokemons?.length / xPagina);

  return (



    <div className='container-card'>

      <Paginacion
        pagina={pagina}
        setPagina={setPagina}
        maximo={maximo}

        xPagina={xPagina}
        setXPagina={setXPagina}
      />

      {
        pokemons?.length === 0 ? (<Page404 />) :(
          
          pokemons?.slice((pagina - 1) * xPagina, (pagina - 1) * xPagina + xPagina).map(pkinfo => (
            <PokeCard
              key={pkinfo.url}
              pkinfo={pkinfo}
            />
          ))
        )

      }

    </div>

  )
}

export default ListPokemons