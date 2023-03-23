import { CartItem } from './reducer'

export enum ActionTypes {
  UPDATE_CART = 'UPDATE_CART',
  UPDATE_QUANTITY_CART = 'UPDATE_QUANTITY_CART',
  DELETE_ITEM_CART = 'DELETE_ITEM_CART',
}

export function updateCart(cart: CartItem) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      cart,
    },
  }
}

export function updateQuantityCart(cart: CartItem) {
  return {
    type: ActionTypes.UPDATE_QUANTITY_CART,
    payload: {
      cart,
    },
  }
}

export function deleteItemToCart(id: number) {
  return {
    type: ActionTypes.DELETE_ITEM_CART,
    payload: {
      id,
    },
  }
}
