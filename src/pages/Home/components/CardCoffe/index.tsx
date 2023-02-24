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
import CoffeImage from '../../../../assets/tiposCafe/expressoTradicional.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

interface CardCoffeeProps {
  coffee: {
    id: number
    categorys: {
      category: string
    }[]
    title: string
    subtitle: string
    price: number
  }
}

export function CardCoffe({ coffee }: CardCoffeeProps) {
  const [countCoffeToAdd, setCountCoffeToAdd] = useState(0)

  return (
    <CardCoffeContainer>
      <img src={CoffeImage} alt="Café expresso tradicional" />

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
            <button onClick={() => setCountCoffeToAdd(countCoffeToAdd - 1)}>
              <Minus size={14} weight="fill" />
            </button>
            {countCoffeToAdd}
            <button onClick={() => setCountCoffeToAdd(countCoffeToAdd + 1)}>
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
