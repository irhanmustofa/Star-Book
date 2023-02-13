import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">BUKU</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#populer">Populer</Nav.Link>
                        <Nav.Link href="#umum">Umum</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        )
    }
    
    export default NavigationBar