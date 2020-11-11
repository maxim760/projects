import React from "react"
import { Categories, SortPopup, PizzaLoadingBlock } from "../components"
import { PizzaBlock } from "../components"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/rootReducer"
import { setCategory, setSortBy } from "../redux/actions/filters"
import { fetchPizzas } from "../redux/actions/pizzas"
import { pizzasState } from "../redux/reducers/pizzas"
import { filterState } from "../redux/reducers/filters"

import { pizzaType, pizzaTypeToState, typeOfPizzaType } from "../types"
import { addPizzaCart } from "../redux/actions/cart"
const categoryNames = ["Мясные", "Вегетианская", "Гриль", "Острые", "Закрытые"]
const sortNames: Array<{
  name: string
  type: typeOfPizzaType
}> = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
]

export const Home: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { items: pizzas, isLoaded } = useSelector<RootState, pizzasState>(
    (state) => {
      return {
        items: state.pizzas.items,
        isLoaded: state.pizzas.isLoaded,
      }
    }
  )

  const { category, sortBy } = useSelector<RootState, filterState>((state) => {
    return {
      category: state.filters.category,
      sortBy: state.filters.sortBy,
    }
  })
  const cartItems = useSelector<
    RootState,
    { [key: number]: {items: pizzaTypeToState[], totalCount: number} }
  >((state) => state.cart.items)

  const onSelectCategory: (index: number | null) => void = React.useCallback(
    (index) => {
      dispatch(setCategory(index))
    },
    [dispatch]
  )

  const onClickSort: (index: number) => void = React.useCallback(
    (index) => {
      dispatch(setSortBy(sortNames[index].type))
    },
    [dispatch]
  )

  const onAddPizza: (obj: pizzaType) => void = React.useCallback((obj) => {
    dispatch(addPizzaCart(obj))
  }, [dispatch])


  React.useEffect(() => {
      dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy, dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          onClickCategory={onSelectCategory}
          activeCategory={category}
        />
        <SortPopup
          activeSortType={sortBy}
          items={sortNames}
          onClickSort={onClickSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((pizza) => {
              return (
                <PizzaBlock
                  inCartCount={cartItems[pizza.id] ? cartItems[pizza.id].totalCount : 0}
                  onAddPizza={onAddPizza}
                  key={pizza.id}
                  {...pizza}
                />
              )
            })
          : Array.from({ length: 12 }, (_, k) => <PizzaLoadingBlock key={k} />)}
      </div>
    </div>
  )
}
