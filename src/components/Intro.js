import { Col, Container, Row, Button } from 'react-bootstrap';
const Intro = () => {
    return(
        <div>
          <div className="intro d-flex justify-content-end align-items-end">
            <Container className="text-white d-flex justify-content-center align-items-center">
              <Row>
                <Col>
                  <div className="title">KUMPULAN BUKU</div>
                  <div className="title2">GRATIS</div>
                  <div className="introButton mt-4">
                    <Button variant="dark" className="btn-lg">Lihat Semua List</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
    )
}

export default Intro