import { dataItemType, dataObjectType, pizzaType, typeOfPizzaType, pizzaRemoveType } from "../types"

export const SET_SORT_BY = "SET_SORT_BY"
export type actionSortByType = {
  payload: typeOfPizzaType
  type: typeof SET_SORT_BY,
}
export const SET_CATEGORY = "SET_CATEGORY"
export type actionCategoryType = {
  payload: number | null,
  type: typeof SET_CATEGORY,
}
export const SET_PIZZAS = "SET_PIZZAS"
export type actionPizzasType = {
  type: typeof SET_PIZZAS,
  payload: Array<dataItemType>,
}

export const SET_LOADING = "SET_LOADING"
export type actionSetLoadingType = {
  type: typeof SET_LOADING,
  payload: boolean

}

export const CLEAR_CART = "CLEAR_CART"
export type actionClearCartType = {
  type: typeof CLEAR_CART,
}
export const ADD_PIZZA_CART = "ADD_PIZZA_CART"
export type actionAddPizzaCartType = {
  type: typeof ADD_PIZZA_CART,
  payload: pizzaType
}
export const REMOVE_ONE_PIZZA_CART = "REMOVE_ONE_PIZZA_CART"
export type actionRemoveOnePizzaCartType = {
  type: typeof REMOVE_ONE_PIZZA_CART,
  payload: pizzaRemoveType
}

export const REMOVE_PIZZAS_CART = "REMOVE_PIZZAS_CART"
export type actionRemovePizzasCartType = {
  type: typeof REMOVE_PIZZAS_CART,
  payload: pizzaRemoveType
}

export type actionPizzasTypes =
  | actionPizzasType
  | actionSetLoadingType
export type actionFilterTypes =
  | actionCategoryType
  | actionSortByType

export type actionCartTypes =
  | actionClearCartType
  | actionAddPizzaCartType
  | actionRemovePizzasCartType
  | actionRemoveOnePizzaCartType
