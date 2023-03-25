import {
  ContainerFinished,
  ContainerDataFinished,
  ContentCard,
  BeneficiosItemGridLaranja,
  BeneficiosItemGridAmarelo,
  BeneficiosItemGridRoxo,
} from './styles'

import Background from '../../assets/BackgroundFinished.svg'
import { Timer, MapPin, CurrencyDollarSimple } from 'phosphor-react'

export function Finished() {
  return (
    <ContainerFinished>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <ContainerDataFinished>
        <ContentCard>
          <BeneficiosItemGridRoxo>
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <span>
              Entrega em Idaspe Viviane, 180 <b>Alvinópolis - Atibaia, SP</b>
            </span>
          </BeneficiosItemGridRoxo>
          <BeneficiosItemGridAmarelo>
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>
            </span>
          </BeneficiosItemGridAmarelo>
          <BeneficiosItemGridLaranja>
            <div>
              <CurrencyDollarSimple size={16} weight="fill" />
            </div>
            <span>
              Pagamento na entrega <br />
              <b>Cartão de Crédito</b>
            </span>
          </BeneficiosItemGridLaranja>
        </ContentCard>
        <div>
          <img
            src={Background}
            alt="Um copo de café dentro de uma forma abstrata amarela"
          />
        </div>
      </ContainerDataFinished>
    </ContainerFinished>
  )
}
