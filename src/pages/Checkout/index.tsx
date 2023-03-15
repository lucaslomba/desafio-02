import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react'
import { useState } from 'react'
import { CardCoffeSelected } from './components/CardCoffeSelected'

import {
  CheckoutContainer,
  Card,
  CardHeaderContainer,
  IconHeader,
  IconHeaderPayment,
  HeaderContent,
  Input,
  GridStreet,
  GridNumberAndComplement,
  GridCity,
  CardMethodPayment,
  Button,
  CardSelecteds,
  ButtonConfirm,
  ResumeContainerGrid,
  ResumeTotal,
} from './styles'

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('')

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <Card>
          <CardHeaderContainer>
            <IconHeader>
              <MapPinLine size={22} />
            </IconHeader>
            <HeaderContent>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </HeaderContent>
          </CardHeaderContainer>

          <div>
            <div>
              <Input type="text" placeholder="CEP" />
            </div>
            <GridStreet>
              <Input type="text" placeholder="Rua" />
            </GridStreet>
            <GridNumberAndComplement>
              <Input type="text" placeholder="Número" />
              <Input type="text" placeholder="Complemento" />
            </GridNumberAndComplement>
            <GridCity>
              <Input type="text" placeholder="Bairro" />
              <Input type="text" placeholder="Cidade" />
              <Input type="text" placeholder="UF" />
            </GridCity>
          </div>
        </Card>

        <Card>
          <CardHeaderContainer>
            <IconHeaderPayment>
              <CurrencyDollar size={22} />
            </IconHeaderPayment>
            <HeaderContent>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </HeaderContent>
          </CardHeaderContainer>

          <CardMethodPayment>
            <Button
              className={paymentMethod === 'credit' ? 'active' : ''}
              onClick={() => setPaymentMethod('credit')}
            >
              <CreditCard size={16} /> <span>Cartão de crédito</span>
            </Button>
            <Button
              className={paymentMethod === 'debit' ? 'active' : ''}
              onClick={() => setPaymentMethod('debit')}
            >
              <Bank size={16} /> <span>cartão de débito</span>
            </Button>
            <Button
              className={paymentMethod === 'cash' ? 'active' : ''}
              onClick={() => setPaymentMethod('cash')}
            >
              <Money size={16} /> <span>dinheiro</span>
            </Button>
          </CardMethodPayment>
        </Card>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CardSelecteds>
          <CardCoffeSelected />
          <CardCoffeSelected />

          <ResumeContainerGrid>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <ResumeTotal>Total</ResumeTotal>
              <ResumeTotal>R$ 33,20</ResumeTotal>
            </div>
          </ResumeContainerGrid>

          <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
        </CardSelecteds>
      </div>
    </CheckoutContainer>
  )
}
