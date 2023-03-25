import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  deleteItemToCart,
  updateCart,
  updateQuantityCart,
} from '../reducers/Cart/actions'
import { CartItem, cartReducer } from '../reducers/Cart/reducer'

interface CartContextType {
  cart: CartItem[]
  summaryCart: number
  summaryCartWithDelivery: number
  getSummaryValuesToPayment: () => void
  addItemToCart: (data: CartItem) => void
  editQuantityInCart: (data: CartItem) => void
  deleteItemCart: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [summaryCart, setSummaryCart] = useState(0)
  const [summaryCartWithDelivery, setSummaryCartWithDelivery] = useState(0)

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

    localStorage.setItem('@iginite-coffee-delivery:cart-state-2.0.0', stateJSON)
  }, [cartState])

  function addItemToCart(data: CartItem) {
    dispatch(updateCart(data))
  }

  function editQuantityInCart(data: CartItem) {
    dispatch(updateQuantityCart(data))
  }

  function deleteItemCart(id: number) {
    dispatch(deleteItemToCart(id))
  }

  function getSummaryValuesToPayment() {
    let summary = 0
    for (let index = 0; index < cart.length; index++) {
      summary = summary + cart[index].totalPrice
    }

    setSummaryCart(summary)
    setSummaryCartWithDelivery(summary + 3.5)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        summaryCart,
        summaryCartWithDelivery,
        getSummaryValuesToPayment,
        addItemToCart,
        editQuantityInCart,
        deleteItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
