import { useRef, useState } from 'react'
import './style/Paginacion.css'

const Paginacion = ({ pagina, setPagina, maximo, xPagina, setXPagina }) => {

  const [input, setInput] = useState(1)

  const handlePrevPage = () => {
    if (pagina > 1) {
      setInput(input - 1)
      setPagina(pagina - 1)
    }
  }

  const handleNextPage = () => {
    setInput(input + 1)
    setPagina(pagina + 1)
  }

  const handleKeyDown = (e) => {

    let min = parseInt(e.target.value) < 1
    let max = parseInt(e.target.value) > Math.ceil(maximo)
    let nulo = isNaN(parseInt(e.target.value))

    if (e.key === 'Enter') {
      setPagina(parseInt(e.target.value))

      if (min || max || nulo) {
        setPagina(1)
        setInput(1)
      }
      else {
        setPagina(parseInt(e.target.value))
      }

    }
  }

  const handleOnChange = e => {
    const inputValue = e.target.value.replace(/\D/g, '');

    setInput(inputValue);
  }


  const inputRef = useRef()

  const handleNumXPage = e => {

    if (e.key === 'Enter') {
      const newValue = inputRef.current.value.trim();

      if (!isNaN(newValue) && parseInt(newValue) > 0) {
          setXPagina(parseInt(newValue));
      }
    }


  }

  return (
    <div className='container-pag'>
      <div className='num-card'>
        <h3>Cards</h3>
        <form className='form'>
          <input
            className='paginacion__xnumero'
            type='text'
            ref={inputRef}
            onBlur={handleNumXPage}
            maxLength={2}
            defaultValue={xPagina}
            onKeyDown={handleNumXPage}
          />


        </form>
      </div>
      <div className='pagination-content'>
        <button onClick={handlePrevPage} className='paginacion__prev'><i class='bx bx-left-arrow-alt'></i></button>

        <form className='form'>

          <input className='paginacion__numero'
            onChange={e => handleOnChange(e)}
            onKeyDown={e => handleKeyDown(e)}
            type="text"
            value={input}
          />

        </form>

        <p className='paginacion__total'>de  <span className='numero__final'>{maximo}</span></p>
        <button onClick={handleNextPage} className='paginacion__next'><i class='bx bx-right-arrow-alt'></i></button>
      </div>
    </div>
  )
}

export default Paginacion