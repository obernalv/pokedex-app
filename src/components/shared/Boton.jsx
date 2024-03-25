import './style.css/Boton.css'

const Boton = ({ onClick, texto }) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="btn" onClick={handleClick}>{texto}</button>
  )

}

export default Boton