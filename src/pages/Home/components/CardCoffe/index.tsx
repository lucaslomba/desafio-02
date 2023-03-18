import {
  CardCoffeContainer,
  CardCoffeType,
  CardCoffeTitle,
  CardCoffeSubtitle,
  FooterContainer,
  CardCoffePrice,
  CardCoffeTypesContainer,
} from './styles'

import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CardCoffeeProps {
  coffee: {
    id: number
    image: string
    categorys: {
      category: string
    }[]
    title: string
    subtitle: string
    price: number
  }
}

export function CardCoffe({ coffee }: CardCoffeeProps) {
  const { addItemToCart } = useContext(CartContext)
  const [countCoffeToAdd, setCountCoffeToAdd] = useState(0)

  const urlImage = '../../../../src/assets/tiposCafe/'

  function handleCountCoffeAdd(action: string) {
    const newValueCount =
      action === 'add' ? countCoffeToAdd + 1 : countCoffeToAdd - 1

    if (newValueCount < 0) {
      return false
    }

    setCountCoffeToAdd(newValueCount)

    const data = {
      coffeeId: coffee.id,
      quantity: newValueCount,
      unityPrice: coffee.price,
      totalPrice: coffee.price * newValueCount,
    }

    addItemToCart(data)
  }

  return (
    <CardCoffeContainer>
      <img src={urlImage + coffee.image} alt={coffee.title} />

      <CardCoffeTypesContainer>
        {coffee.categorys.map((category) => {
          return (
            <CardCoffeType key={Math.random()}>
              {category.category}
            </CardCoffeType>
          )
        })}
      </CardCoffeTypesContainer>

      <CardCoffeTitle>{coffee.title}</CardCoffeTitle>

      <CardCoffeSubtitle>{coffee.subtitle}</CardCoffeSubtitle>

      <FooterContainer>
        <CardCoffePrice>
          <span>R$</span> {coffee.price.toFixed(2).toString().replace('.', ',')}
        </CardCoffePrice>

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

          <NavLink to="/checkout" title="checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </div>
      </FooterContainer>
    </CardCoffeContainer>
  )
}
