import React from "react"

type orderItem = {
  item: number,
  quantity: number
}

type State = { totalPrice: number, orderItems: orderItem[] }
type Action = { type: "INCREASE" | "DECREASE" | "SET", price: number, item: number, quantity: number }
type Dispatch = (action: Action) => void

export const PriceContext = React.createContext<{ state: State, dispatch: Dispatch, } | undefined>(undefined)


export function useTotalPrice() {
  const priceContext = React.useContext(PriceContext)

  if (priceContext === undefined) {
    throw new Error("PriceContextProvider is not available")
  }

  return priceContext
}

function totalPriceReducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREASE":
      return {
        totalPrice: state.totalPrice + action.price, orderItems: state.orderItems?.map(item => {
          if (item.quantity !== undefined && item.item === action.item) {
            item.quantity += 1
            return item
          }
          state.orderItems.push({ item: action.item, quantity: action.quantity })
          return item
        })
      }
    case "DECREASE":
      return {
        totalPrice: state.totalPrice - action.price, orderItems: state.orderItems.map(item => {
          if (item.quantity !== undefined && item.item === action.item) {
            item.quantity += 1
            return item
          }
          state.orderItems?.push({ item: action.item, quantity: action.quantity })
          return item
        })
      }
    case "SET":
      return {
        totalPrice: action.price, orderItems: state.orderItems.map(item => {
          state.orderItems.push({ item: action.item, quantity: action.quantity })
          return item
        })
      }
  }
}

export function PriceContextProvider({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = React.useReducer(totalPriceReducer, { totalPrice: 0, orderItems: [] })

  const value = { state, dispatch }

  return <PriceContext.Provider value={value}>{children}</PriceContext.Provider>
}



