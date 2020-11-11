
export type dataItemType = {
  "id": number,
  "imageUrl": string,
  "name": string,
  "types": Array<number>,
  "sizes": Array<number>,
  "price": number,
  "category": number,
  "rating": number
} 

export type dataArrayType = Array<dataItemType>

  export type dataObjectType = {
    "pizzas": dataArrayType
}
  
export type fetchType = {
  "status": number,
  "ok": boolean
}

export type typeOfPizzaType = "popular" | "price" | "alphabet"
export type pizzaType = {
  "id": number,
  "imageUrl": string,
  "name": string,
  "price": number,
  "type": string,
  "size": number
}
export type pizzaTypeToState = {
  "id": number,
  "imageUrl": string,
  "name": string,
  "price": number,
  "type": string,
  "size": number,
  "count": number
}
export type pizzaRemoveType = {
  "id": number,
  "type": string,
  "size": number,
}