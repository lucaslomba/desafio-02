import styled from 'styled-components'

export const HomeContainer = styled.div``

export const HomeStartContainer = styled.div`
  height: calc(100vh - 10rem);

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: url(http://localhost:5173/src/assets/BackgroundContainer.png);
  background-size: cover;

  padding: 2rem 10rem 2rem 10rem;
`

export const ContentContainer = styled.div`
  width: 50%;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};

    padding-top: 1rem;
    margin-bottom: 2rem;
  }
`

export const BeneficiosContainerGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

export const BeneficiosItemGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-top: 1.25rem;

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
    color: ${(props) => props.theme['gray-700']};
  }
`

export const BeneficiosItemGridLaranja = styled(BeneficiosItemGrid)`
  div {
    background: ${(props) => props.theme['yellow-900']};
  }
`

export const BeneficiosItemGridPreto = styled(BeneficiosItemGrid)`
  div {
    background: ${(props) => props.theme['gray-700']};
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
