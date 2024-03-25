import FormTrainer from '../components/HomePage/FormTrainer'

import './styles/HomePage.css'

const HomePage = () => {
  return (

    <div className='home'>
      <img className='banner' src="/images/logo_pokedex.png" alt="Banner" />

      <div className='greeting-container'>
        <h2 className='home__subtitle'>¡Hi trainer!</h2>
        <p className='home__text'>To get started, type your name</p>
      </div>

      <FormTrainer />

    </div>

  )
}

export default HomePage