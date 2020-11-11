import { actionFilterTypes,actionSortByType ,SET_SORT_BY, actionCategoryType, SET_CATEGORY } from "../types"
import { typeOfPizzaType } from "../../types"


export const setSortBy = (sort: typeOfPizzaType): actionSortByType => {
  return {
    type: SET_SORT_BY,
    payload: sort
  }
}

export const setCategory = (index: number | null) : actionCategoryType => {
  return {
    type: SET_CATEGORY,
    payload: index
  }
}