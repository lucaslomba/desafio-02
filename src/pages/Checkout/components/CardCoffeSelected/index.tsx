import { useContext, useState } from 'react'
import { typesOfCoffe } from '../../../../Data/typesOfCoffe'

import { Minus, Plus, Trash } from 'phosphor-react'

import {
  CardCoffeeDetails,
  CardCoffeeContainer,
  CardCoffeePrice,
  FooterContainer,
  ButtonRemoveToCart,
} from './styles'
import { CartContext } from '../../../../contexts/CartContext'

interface CardCoffeSelectedProps {
  coffeeId: number
  quantity: number
}

export function CardCoffeSelected({
  coffeeId,
  quantity,
}: CardCoffeSelectedProps) {
  const { editQuantityInCart, deleteItemCart } = useContext(CartContext)
  const urlImage = '../../../../src/assets/tiposCafe/'

  const [countCoffeToAdd, setCountCoffeToAdd] = useState(quantity)
  const dataSelectedCoffee = typesOfCoffe.filter(
    (coffee) => coffee.id === coffeeId,
  )

  function handleCountCoffeAdd(action: string) {
    const newValueCount =
      action === 'add' ? countCoffeToAdd + 1 : countCoffeToAdd - 1

    if (newValueCount < 0) {
      return false
    }

    setCountCoffeToAdd(newValueCount)

    const data = {
      coffeeId: dataSelectedCoffee[0].id,
      quantity: newValueCount,
      unityPrice: dataSelectedCoffee[0].price,
      totalPrice: dataSelectedCoffee[0].price * newValueCount,
    }

    editQuantityInCart(data)
  }

  function handleDeleteItemCart() {
    const coffeeId = dataSelectedCoffee[0].id

    deleteItemCart(coffeeId)
  }

  return (
    <CardCoffeeContainer>
      <img src={urlImage + dataSelectedCoffee[0].image} alt="Café Árabe" />
      <CardCoffeeDetails>
        <span>{dataSelectedCoffee[0].title}</span>
        <FooterContainer>
          <div>
            <span>
              <button onClick={() => handleCountCoffeAdd('rmv')}>
                <Minus size={14} weight="fill" />
              </button>
              {countCoffeToAdd}
              <button onClick={() => handleCountCoffeAdd('add')}>
                <Plus size={14} weight="fill" />
              </button>
            </span>

            <ButtonRemoveToCart onClick={handleDeleteItemCart}>
              <Trash size={14} weight="fill" />
              <span>REMOVER</span>
            </ButtonRemoveToCart>
          </div>
        </FooterContainer>
      </CardCoffeeDetails>

      <CardCoffeePrice>
        R$ {dataSelectedCoffee[0].price.toFixed(2).toString().replace('.', ',')}
      </CardCoffeePrice>
    </CardCoffeeContainer>
  )
}
