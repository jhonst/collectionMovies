import './App.css';
import { Routes, Route } from "react-router-dom";
import { MoviesDashboard } from './pages/MoviesDashboard';
import { MovieDetail } from './pages/MovieDetail';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  //<MoviesDashboard/>
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">All movies</Nav.Link>
            <Nav.Link href="/detail/10000">Random movie</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes className="rutas">
        <Route path="/" element={<MoviesDashboard/>} />
        <Route path="detail/:idMovie" element={<MovieDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
