import { combineReducers } from "redux"

import {filters, pizzas, cart} from "./reducers"

export const rootReducer = combineReducers({
  filters,
  pizzas,
  cart
})

export type RootState = ReturnType<typeof rootReducer>;
