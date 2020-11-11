import React from "react"
import { typeOfPizzaType } from "../types"

type propTypes = {
  items: Array<{ name: string, type: typeOfPizzaType}>
  activeSortType: typeOfPizzaType
  onClickSort: (index: number) => void
}


export const SortPopup: React.FC<propTypes> = React.memo(({ items, activeSortType, onClickSort }: propTypes): React.ReactElement => {
  const sortRef = React.useRef(null)
  const [visible, setVisible] = React.useState(false)
  const activeLabel = items.find(item => item.type === activeSortType)?.name
  React.useEffect(() => {
    document.body.addEventListener("click", closePopup)
    return () => {
      document.body.removeEventListener("click", closePopup)
    }
  }, [])

  const closePopup  = (ev: any ) : void => {
    const path = ev.path || (ev.composedPath && ev.composedPath())
    if (!path.includes(sortRef.current)) { 
      setVisible(false)
    }
  }
  const togglePopup: () => void = () => {
    setVisible(prev => !prev)
  }
  
  const onSelectItem: (index: number) => void = index => {
    onClickSort(index)
    setVisible(false)
  }
  
  
  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label" >
        <svg
          className={visible ? "rotated" : ""}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={togglePopup}>{activeLabel}</span>
      </div>
      {visible && <div className="sort__popup">
        <ul>
          {items?.map((item,i) => {
            return (
              <li
                key={item.type}
                className={activeSortType === item.type ? "active" : ""}
                onClick={() => onSelectItem(i)}
              >{item.name}</li>
            )
          })}
        </ul>
      </div>}
    </div>
  )
}
)