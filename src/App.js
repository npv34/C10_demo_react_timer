import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarHead from "./components/Navbar/NavbarHead";
import Todos from "./components/Todos/Todos";

function App() {
    const page = 'Todo app'

  return (
    <>
        <Container>
            <Row>
                <Col>
                    <NavbarHead pageTitle={page}/>
                </Col>

            </Row>
            <Row>
                <Col>
                    <Todos/>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default App;
