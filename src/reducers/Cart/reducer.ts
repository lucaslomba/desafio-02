import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface CartItem {
  coffeeId: number
  quantity: number
  unityPrice: number
  totalPrice: number
}

interface CartState {
  cart: CartItem[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.UPDATE_CART: {
      const cartItemIndex = state.cart.findIndex((cart) => {
        return cart.coffeeId === action.payload.cart.coffeeId
      })

      return produce(state, (draft) => {
        cartItemIndex >= 0
          ? (draft.cart[cartItemIndex].quantity =
              draft.cart[cartItemIndex].quantity + action.payload.cart.quantity)
          : draft.cart.push(action.payload.cart)
      })
    }
    case ActionTypes.UPDATE_QUANTITY_CART: {
      const cartItemIndex = state.cart.findIndex((cart) => {
        return cart.coffeeId === action.payload.cart.coffeeId
      })

      return produce(state, (draft) => {
        cartItemIndex >= 0
          ? (draft.cart[cartItemIndex] = action.payload.cart)
          : draft.cart.push(action.payload.cart)
      })
    }
    case ActionTypes.DELETE_ITEM_CART: {
      const cartItemIndex = state.cart.findIndex((cart) => {
        return cart.coffeeId === action.payload.id
      })

      if (cartItemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cart[cartItemIndex].quantity = 0
        draft.cart[cartItemIndex].totalPrice = 0
      })
    }
    default:
      return state
  }
}
