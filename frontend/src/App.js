import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact/>
            <Route path = '/product/:id' element = {<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
