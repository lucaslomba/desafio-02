import styled from 'styled-components'

export const CardCoffeContainer = styled.div`
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px 6px 36px;

  position: relative;

  padding: 6.5rem 1.6rem 0 1.6rem;

  img {
    position: absolute;
    top: -15%;
  }
`

export const CardCoffeType = styled.span`
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-900']};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.625rem;
  margin: 0.2rem;

  border-radius: 100px;
  padding: 0.2rem 0.7rem;
`

export const CardCoffeTitle = styled.span`
  margin-top: 1rem;

  color: ${(props) => props.theme['gray-900']};
  font-weight: bold;
`

export const CardCoffeSubtitle = styled.span`
  margin-top: 0.3rem;

  color: ${(props) => props.theme['gray-600']};
  font-size: 0.875rem;

  text-align: center;
`

export const FooterContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.5rem;

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

      padding: 0 0.6rem;

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

export const CardCoffePrice = styled.span`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['gray-900']};
  font-weight: bold;
  font-size: 1.5rem;

  span {
    font-family: 'Roboto', sans-serif !important;
    font-size: 0.875rem;
    font-weight: normal;
  }
`

export const CardCoffeTypesContainer = styled.div`
  display: flex;
`

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme.white};

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;
`
