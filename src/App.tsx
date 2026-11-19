import { HashRouter } from "react-router-dom";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Rotas from "./routes";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Rotas />
      <Footer />
    </HashRouter>
  );
}

export default App;
