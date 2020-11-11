import { actionPizzasTypes, SET_PIZZAS,  SET_LOADING } from '../types'
import {  dataItemType } from '../../types'

export type pizzasState = {
  items: dataItemType[],
  isLoaded: boolean
}
const initialState: pizzasState = {
  items: [],
  isLoaded: false
}

export const pizzas = (state = initialState, action: actionPizzasTypes): pizzasState => {
  
  switch(action.type) {
    
      case SET_LOADING:
        return {
          ...state,
          isLoaded:action.payload
        }
      case SET_PIZZAS: 
        return {
          ...state,
          items: action.payload
        } 
    default:
      const x: never = action
      return state;
  
  }
}