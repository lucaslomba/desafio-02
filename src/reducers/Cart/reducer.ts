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
          ? (draft.cart[cartItemIndex] = action.payload.cart)
          : draft.cart.push(action.payload.cart)
      })
    }
    default:
      return state
  }
}
