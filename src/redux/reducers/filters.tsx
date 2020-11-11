import { SET_SORT_BY, actionFilterTypes, SET_CATEGORY } from '../types'
import { typeOfPizzaType } from '../../types'

export type filterState = {
  sortBy: typeOfPizzaType,
  category: number| null
}
const initialState: filterState = {
  sortBy: "popular",
  category: null
}

export const filters = (state = initialState, action: actionFilterTypes) :filterState  => {
  switch(action.type) {
    case SET_SORT_BY: 
      return {
        ...state,
        sortBy: action.payload
      }
    case SET_CATEGORY: 
      return {
        ...state,
        category: action.payload
      }
    default:
      return state
  }
}