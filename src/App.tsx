import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import Cart from "./components/Cart";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Rotas from "./routes";
import { store } from "./store";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
        <ScrollToTop />
        <Rotas />
        <Footer />
        <Cart />
      </HashRouter>
    </Provider>
  );
}

export default App;
