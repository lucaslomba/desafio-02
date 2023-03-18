import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { updateCart } from '../reducers/Cart/actions'
import { CartItem, cartReducer } from '../reducers/Cart/reducer'

interface CartContextType {
  cart: CartItem[]
  addItemToCart: (data: CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cart: [] },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@iginite-coffee-delivery:cart-state-2.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { cart } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    console.log(stateJSON)

    localStorage.setItem('@iginite-coffee-delivery:cart-state-2.0.0', stateJSON)
  }, [cartState])

  function addItemToCart(data: CartItem) {
    dispatch(updateCart(data))
  }

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
