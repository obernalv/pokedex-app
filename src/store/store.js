import { configureStore } from '@reduxjs/toolkit'
import trainer from './states/trainer.slice'
export default configureStore({
  reducer:{
    trainer
  }
})

/*En este objeto se crea primero se para almacenar el estado global,
que sera inmutable(no se puede cambiar directamente) */