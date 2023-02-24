import {
  CardCoffeContainer,
  CardCoffeType,
  CardCoffeTitle,
  CardCoffeSubtitle,
  FooterContainer,
  CardCoffePrice,
} from './styles'

import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import CoffeImage from '../../../../assets/tiposCafe/expressoTradicional.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function CardCoffe() {
  const [countCoffeToAdd, setCountCoffeToAdd] = useState(0)

  return (
    <CardCoffeContainer>
      <img src={CoffeImage} alt="Café expresso tradicional" />

      <CardCoffeType>Tradicional</CardCoffeType>

      <CardCoffeTitle>Expresso Tradicional</CardCoffeTitle>

      <CardCoffeSubtitle>
        O tradicional café feito com água quente e grãos moídos
      </CardCoffeSubtitle>

      <FooterContainer>
        <CardCoffePrice>
          <span>R$</span> 9,90
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
