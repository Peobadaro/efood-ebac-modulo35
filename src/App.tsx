import { HashRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalStyle } from './styles'

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
    </HashRouter>
  )
}

export default App
