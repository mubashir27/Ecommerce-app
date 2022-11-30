import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreens from "./screens/HomeScreens";
import ProductScreen from "./screens/ProductScreen";
import SpecificProductScreen from "./screens/SpecificProductScreen/SpecificProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3' >
        <Container>
          <Routes>
          <Route path='/' element={<HomeScreens/>} />
          <Route path='/products' element={<ProductScreen/>} />
          <Route path='/product/:id' element={<SpecificProductScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App; 
