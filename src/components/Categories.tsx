import React from "react"


type propTypes = {
  activeCategory: number | null
  items: Array<string>
  onClickCategory: (id: number | null) => void
}

export const Categories: React.FC<propTypes> = React.memo(({ activeCategory ,items, onClickCategory } : propTypes) => {

  
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory == null ? "active" : "null"} onClick={onClickCategory.bind(null,null)}>Все</li>
        {
          items?.map((item,index) => {
            return (
              <li key={item} className={activeCategory === index ? "active" : ""} onClick={onClickCategory.bind(null,index)}>
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
})
