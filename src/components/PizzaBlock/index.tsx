import React from "react"
import classes from "html-classes"
import { PizzaLoadingBlock, Button } from "../../components"
import { pizzaType } from "../../types"

type propTypes = {
  id:number
  price: number
  types: Array<number>
  sizes: Array<number>
  imageUrl: string
  name: string
  inCartCount: number
  onAddPizza: ({id,imageUrl,price,name,size,type}: pizzaType) => void 
}

export const PizzaBlock = ({
  price,
  name,
  imageUrl,
  types,
  sizes,
  id,
  inCartCount,
  onAddPizza
}: propTypes) => {
  const availableTypes = ["тонкое", "традиционное"]
  const availableSizes = [26, 30, 40]
  const [activeType, setActiveType] = React.useState(types[0])
  const [activeSize, setActiveSize] = React.useState(sizes[0])
  const onSelectType: (i: number) => void = (i) => {
    setActiveType(i)
  }
  const onSelectSize: (i: number) => void = (i) => {
    setActiveSize(availableSizes[i])
  }
  const addPizzaHandler = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      type: availableTypes[activeType]

    }
    onAddPizza(obj)
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, i) => {
            return (
              <li
                className={classes({
                  active: activeType === i, // название класса: условие по которому его добавляем
                  disabled: !types.includes(i),
                })}
                key={type}
                onClick={onSelectType.bind(null, i)}
              >
                {type}
              </li>
            )
          })}
        </ul>
        <ul>
          {availableSizes.map((size, i) => (
            <li
              key={size}
              className={classes({
                active: activeSize === size,
                disabled: !sizes.includes(size),
              })}
              onClick={onSelectSize.bind(null, i)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={addPizzaHandler} outline className="button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{inCartCount}</i>
        </Button>
      </div>
    </div>
  )
}
