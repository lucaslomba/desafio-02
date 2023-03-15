import { useState } from 'react'

import { Minus, Plus, Trash } from 'phosphor-react'

import {
  CardCoffeeDetails,
  CardCoffeeContainer,
  CardCoffeePrice,
  FooterContainer,
  ButtonRemoveToCart,
} from './styles'

export function CardCoffeSelected() {
  const [countCoffeToAdd, setCountCoffeToAdd] = useState(1)

  function handleCountCoffeAdd(action: string) {
    const newValueCount =
      action === 'add' ? countCoffeToAdd + 1 : countCoffeToAdd - 1

    if (newValueCount < 0) {
      return false
    }

    setCountCoffeToAdd(newValueCount)
  }

  return (
    <CardCoffeeContainer>
      <img src="../../../../src/assets/tiposCafe/Arabe.svg" alt="Café Árabe" />
      <CardCoffeeDetails>
        <span>Expresso Tradicional</span>
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

            <ButtonRemoveToCart>
              <Trash size={14} weight="fill" />
              <span>REMOVER</span>
            </ButtonRemoveToCart>
          </div>
        </FooterContainer>
      </CardCoffeeDetails>

      <CardCoffeePrice>R$ 9,99</CardCoffeePrice>
    </CardCoffeeContainer>
  )
}
