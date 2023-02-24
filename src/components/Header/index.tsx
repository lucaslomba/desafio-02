import { HeaderContainer } from './styles'

import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <nav>
        <span>
          <MapPin size={22} weight="fill" /> Atibaia, SP
        </span>
        <NavLink to="/checkout" title="checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
