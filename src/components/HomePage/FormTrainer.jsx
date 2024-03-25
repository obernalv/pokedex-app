import React, { useRef } from 'react'
import {setTrainer} from '../../store/states/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Boton from '../shared/Boton'
import './styles/FormTrainer.css'



const FormTrainer = () => {

    const trainerInput = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()
            dispatch(setTrainer(trainerInput.current.value.trim()))
            navigate('/pokedex')
    }


    return (
        <form onSubmit={handleSubmit}>
            <input className='input-search' ref={trainerInput} type="text" placeholder='Nombre' required/>
            <Boton clase="trainer-btn"  texto={"Lets Start"}/>
        </form>


    )
}

export default FormTrainer