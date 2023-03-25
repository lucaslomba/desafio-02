import styled from 'styled-components'

export const ContainerFinished = styled.div`
  padding: 0 10rem 0 10rem;

  h1 {
    color: ${(props) => props.theme['yellow-900']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const ContainerDataFinished = styled.div`
  margin-top: 2.5rem;

  display: grid;
  justify-content: space-between;
  grid-template-columns: 48% 45%;
`

export const ContentCard = styled.div`
  padding: 2.5rem;
  display: grid;
  grid-template-columns: auto;

  border-radius: 6px 36px 6px 36px;

  background: linear-gradient(
        ${(props) => props.theme['gray-100']},
        ${(props) => props.theme['gray-100']}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme['yellow-900']},
        ${(props) => props.theme['purple-500']}
      )
      border-box;
  border: 1px solid transparent;
`

export const BeneficiosItemGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    width: 1.9375rem;
    height: 1.9375rem;

    color: ${(props) => props.theme.white};
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const BeneficiosItemGridLaranja = styled(BeneficiosItemGrid)`
  div {
    background: ${(props) => props.theme['yellow-900']};
  }
`

export const BeneficiosItemGridAmarelo = styled(BeneficiosItemGrid)`
  div {
    background: ${(props) => props.theme['yellow-500']};
  }
`

export const BeneficiosItemGridRoxo = styled(BeneficiosItemGrid)`
  div {
    background: ${(props) => props.theme['purple-500']};
  }
`
