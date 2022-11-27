import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreens from "./screens/HomeScreens";

function App() {
  return (
    <div>
      <Header />
      <main className='py-3' >
        <Container>
          <HomeScreens/>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
