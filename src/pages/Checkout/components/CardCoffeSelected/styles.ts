import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  padding: 1.5rem 0 1.5rem 0;
`

export const CardCoffeePrice = styled.span`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['gray-900']};
  font-weight: bold;
  font-size: 1rem;

  margin-left: auto;
`

export const CardCoffeeDetails = styled.div`
  span {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1rem;
  }
`

export const FooterContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 0.5rem;

    span {
      background: ${(props) => props.theme['gray-400']};

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.6rem;

      padding: 0.3rem 0.6rem;

      border-radius: 6px;

      button {
        background: transparent;
        border: none;
        color: ${(props) => props.theme['purple-500']};
        cursor: pointer;
      }
    }
  }
`

export const ButtonRemoveToCart = styled.button`
  background: ${(props) => props.theme['gray-400']};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.3rem 0.6rem;

  border-radius: 6px;
  border: none;

  color: ${(props) => props.theme['purple-500']};
  cursor: pointer;

  span {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.75rem;
  }
`
