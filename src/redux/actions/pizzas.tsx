import { SET_PIZZAS, actionPizzasType, SET_LOADING, actionSetLoadingType } from "../types"
import axios from "axios"
import { dataItemType, dataArrayType, typeOfPizzaType } from "../../types"
import { Dispatch} from 'redux';
import { sorting } from "../../sortingPizzas";




export const fetchPizzas = (category: number | null, sortBy: typeOfPizzaType) => async (dispatch: Dispatch) => {
  dispatch(setLoading(false))

  // если сортировка на бэкенде
  const order = sortBy === "alphabet" ? "asc" : "desc"
  const typeSort = sortBy === "popular" ? "rating" : sortBy === "price" ? "price" : "name"
  const res = await axios.get(`/pizzas?${typeof category === "number" && `category=${category}`}&_sort=${typeSort}&_order=${order}`) // proxy перенаправит на 3003

  // если на фронтенде
  // const res = await axios.get(`http://localhost:3000/pizzas`)

    if (res.status === 404) {
      throw new Error("Could not fetch data, error" + res.status)
    }
  let pizzas: dataArrayType = res.data
  //     // если на фронтенде
  // pizzas = sorting(pizzas, sortBy, category)
  // console.log(pizzas)
  

  dispatch(setPizzas(pizzas))
  dispatch(setLoading(true))
}

export function setPizzas(payload: Array<dataItemType>): actionPizzasType  {
  return {
    type: SET_PIZZAS,
    payload
  }
}

export function setLoading(payload: boolean): actionSetLoadingType  {
  return {
    type: SET_LOADING,
    payload
  }
}