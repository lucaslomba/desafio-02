import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 0 10rem 0 10rem;

  display: grid;
  justify-content: space-between;
  grid-template-columns: 60% 38%;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
  }
`

export const Card = styled.div`
  margin-top: 1rem;
  background: ${(props) => props.theme['gray-200']};

  padding: 2.5rem;
  border-radius: 6px;
`

export const CardHeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;
`

export const IconHeader = styled.div`
  color: ${(props) => props.theme['yellow-900']};
`

export const IconHeaderPayment = styled.div`
  color: ${(props) => props.theme['purple-500']};
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const Input = styled.input`
  padding: 0.7rem;

  background: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};

  border-radius: 4px;

  margin: 0.5rem 0;
`

export const GridStreet = styled.div`
  display: grid;
  grid-template-columns: 100%;
`

export const GridNumberAndComplement = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 49% 49%;
`

export const GridCity = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 32% 32% 32%;
`

export const CardMethodPayment = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 32% 32% 32%;
`

export const Button = styled.button`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  font-size: 0.75rem;
  text-transform: uppercase;

  padding: 0.7rem;

  background: ${(props) => props.theme['gray-400']};
  border: 1px solid transparent;
  border-radius: 6px;

  color: ${(props) => props.theme['purple-500']};

  span {
    color: ${(props) => props.theme['gray-700']};
  }

  cursor: pointer;

  &.active {
    background: ${(props) => props.theme['purple-100']};
    border: 1px solid ${(props) => props.theme['purple-500']};

    color: ${(props) => props.theme['purple-500']};

    span {
      color: ${(props) => props.theme['gray-700']};
    }

    cursor: pointer;
  }
`

export const CardSelecteds = styled.div`
  margin-top: 1rem;
  background: ${(props) => props.theme['gray-200']};

  padding: 2.5rem;

  border-radius: 4px 44px 4px 44px;
`
