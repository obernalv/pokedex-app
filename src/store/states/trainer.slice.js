import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
    //estado global
    name: 'trainer',
    initialState: [],
    reducers: {
        //prm1 valor actual del estado
        //prm2 El valor que se recibe como argumento
        //return siempre solo se retorna el action.payload
        setTrainer:(state, action) => action.payload
        
    }
})

export const { setTrainer } = trainerSlice.actions;

export default trainerSlice.reducer;



//Este es el modulo de estados globales

//Luego este