import { dataArrayType, typeOfPizzaType } from "./types"

export const sorting = (
  ar: dataArrayType,
  type: typeOfPizzaType,
  filter: number | null
): dataArrayType => {
  switch (type) {
    case "popular":
      ar.sort((a, b) => b.rating - a.rating)
      break
    case "price":
      ar.sort((a, b) => b.price - a.price)
      break
    case "alphabet":
      ar.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })
      break
    default:
      const x: never = type
  }
  if (filter !== null) {
    ar = ar.filter((item) => {
      if (item.category === filter) {
        return true
      }
      return false
    })
  }
  return ar
}
