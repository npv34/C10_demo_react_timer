import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarHead from "./components/Navbar/NavbarHead";
import UserList from "./components/Users/UserList";
function App() {
    const page = 'Todo app';
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
                    <UserList/>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default App;
