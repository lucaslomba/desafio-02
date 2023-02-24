import {
  HomeContainer,
  HomeStartContainer,
  BeneficiosContainerGrid,
  BeneficiosItemGridLaranja,
  BeneficiosItemGridPreto,
  BeneficiosItemGridAmarelo,
  BeneficiosItemGridRoxo,
  ContentContainer,
} from './styles'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import Background from '../../assets/Background.svg'

export function Home() {
  return (
    <HomeContainer>
      <HomeStartContainer>
        <ContentContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BeneficiosContainerGrid>
            <BeneficiosItemGridLaranja>
              <div>
                <ShoppingCart size={22} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </BeneficiosItemGridLaranja>
            <BeneficiosItemGridPreto>
              <div>
                <Package size={22} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </BeneficiosItemGridPreto>
            <BeneficiosItemGridAmarelo>
              <div>
                <Timer size={22} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </BeneficiosItemGridAmarelo>
            <BeneficiosItemGridRoxo>
              <div>
                <Coffee size={22} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </BeneficiosItemGridRoxo>
          </BeneficiosContainerGrid>
        </ContentContainer>

        <div>
          <img
            src={Background}
            alt="Um copo de café dentro de uma forma abstrata amarela"
          />
        </div>
      </HomeStartContainer>
    </HomeContainer>
  )
}
