import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Finished } from './pages/Finished'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="/finished/" element={<Finished />} />
      </Route>
    </Routes>
  )
}
