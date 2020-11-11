import { actionCartTypes, CLEAR_CART, ADD_PIZZA_CART, REMOVE_PIZZAS_CART, REMOVE_ONE_PIZZA_CART } from "../types"
import { pizzaType, pizzaTypeToState } from "../../types"

export type cartState = {
  items: {
    [key: number]: {
      items: pizzaTypeToState[],
      totalCount: number
    }
  }
  totalPrice: number
  itemsCount: number
}

const initialState: cartState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
}

export const cart = (
  state = initialState,
  action: actionCartTypes
): cartState => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const { size, type, id } = action.payload
      const index = state.items[id]?.items?.findIndex(
        (item) => item.size === size && item.type === type
      ) 
      const idForAdd = state.items[id] ? state.items[id] : null
      const pickedPizza = index >= 0 ? state.items[id].items[index] : null
      //Сделать массив не извсез пицц , а чтобы под каждым айди был массив обьектом с различающимися типами и сайзом
      // логику выше придется так как она сложная // фильтр где сайз равно пйэлода сайз и и тайп === пэйлоад тайп

      const newItems = {
        ...state.items,
        [id]: !state.items[id]
          ? {
            items: [Object.assign(action.payload, { count: 1 })],
            totalCount: 1
          }
          : index >= 0
            ? {
              items: [
              ...idForAdd!.items.slice(0, index),
              {
                ...pickedPizza!,
                price: pickedPizza!.price/pickedPizza!.count*(pickedPizza!.count+1),
                count: pickedPizza!.count + 1,
              },
              ...idForAdd!.items.slice(index + 1),
              ],
              totalCount: idForAdd!.totalCount + 1
            }
            : {
              items: [...idForAdd!.items, Object.assign(action.payload, { count: 1 })],
              totalCount: idForAdd!.totalCount + 1
            },
      }
      // const allPizzasInCart = Object.values(newItems).flat()
      const allPizzasInCart = ([] as pizzaTypeToState[]).concat.apply(
        [],
        Object.keys(newItems).map((key) => newItems[+key].items)
      ) // получаю массив пиц без тоталКаунта
      

      return {
        ...state,
        items: newItems,
        itemsCount: allPizzasInCart.reduce((acc, item) => acc + item.count, 0),
        totalPrice: allPizzasInCart.reduce((acc, item) => acc + item.price, 0),
      }
    }

    case REMOVE_PIZZAS_CART:
      const { id, size, type } = action.payload
      const index = state.items[id].items.findIndex(pizzaObj => pizzaObj.size === size && pizzaObj.type === type)
      const len = state.items[id].items.length
      const idForRemove = state.items[id]
      const pickedPizzaForRemove = idForRemove.items[index] // в любом случае есть т.к удаляю а не добавляю, был клик и тд
      const newItems = len > 1
        ? {
          ...state.items,
          [id]: {
            items: [...idForRemove.items.slice(0, index), ...idForRemove.items.slice(index + 1)],
            totalCount: idForRemove.totalCount - pickedPizzaForRemove.count
          }
        }
        : { ...state.items }
      if (len <= 1) {
        delete newItems[id]
      }
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - pickedPizzaForRemove.price,
        itemsCount: state.itemsCount - pickedPizzaForRemove.count,
      }
    
    case REMOVE_ONE_PIZZA_CART:
      const { id: idOne, size: sizeOne, type: typeOne } = action.payload
      const idForRemoveRow = state.items[idOne]
      const needPizzaIndex = state.items[idOne].items.findIndex(pizza => pizza.size === sizeOne && pizza.type === typeOne)
      const pickedPizza = state.items[idOne].items[needPizzaIndex]
      const priceForPizza = pickedPizza.price/pickedPizza!.count
      return {
        // метсо восклицателньыз знаков можно as : (pickedPizza as pizzaTypeToState).price
        ...state,
        items: {
          ...state.items,
          [idOne]: {
            items : [
              ...idForRemoveRow.items.slice(0, needPizzaIndex),
                {
                  ...pickedPizza,
                  count: pickedPizza.count - 1,
                  price: pickedPizza.price - priceForPizza
                },
              ...idForRemoveRow.items.slice(needPizzaIndex + 1)
            ],
            totalCount: idForRemoveRow.totalCount - 1
          }
        },
        totalPrice: state.totalPrice - priceForPizza, 
        itemsCount: state.itemsCount - 1
      }

    case CLEAR_CART:
      return {
        totalPrice: 0,
        itemsCount: 0,
        items: {},
      }
    default:
      const x: never = action
      return state
  }
}
