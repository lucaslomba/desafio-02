import { CartItem } from './reducer'

export enum ActionTypes {
  UPDATE_CART = 'UPDATE_CART',
}

export function updateCart(cart: CartItem) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      cart,
    },
  }
}
