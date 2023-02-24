import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem 2rem 10rem;

  nav {
    display: flex;
    gap: 0.5rem;

    span {
      gap: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      background: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-500']};

      padding: 0.5rem;
      border-radius: 6px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      background: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-500']};

      padding: 0.5rem;
      border-radius: 6px;
    }
  }
`
