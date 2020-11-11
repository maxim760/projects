import { actionCartTypes,  actionAddPizzaCartType, REMOVE_PIZZAS_CART, REMOVE_ONE_PIZZA_CART, actionRemoveOnePizzaCartType, actionRemovePizzasCartType } from "../types"
import { CLEAR_CART , ADD_PIZZA_CART } from "../types"
import { dataItemType, pizzaType, pizzaRemoveType } from "../../types"

export const clearCart = (): actionCartTypes => {
  return {
    type: CLEAR_CART,
  }
}

export const addPizzaCart = (pizzaObj: pizzaType): actionAddPizzaCartType => {
  return {
    type: ADD_PIZZA_CART,
    payload: pizzaObj
  }
}
export const removeOnePizzaCart = (pizzaObj: pizzaRemoveType): actionRemoveOnePizzaCartType => {
  return {
    type: REMOVE_ONE_PIZZA_CART,
    payload: pizzaObj
  }
}
export const removePizzasCart = (pizzaObj: pizzaRemoveType): actionRemovePizzasCartType => {
  return {
    type: REMOVE_PIZZAS_CART,
    payload: pizzaObj
  }
}
