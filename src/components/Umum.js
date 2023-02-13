import {Card, Col, Container, Row, Image} from "react-bootstrap"
import buku1Image from "../assets/image/buku1.jpg"
import buku2Image from "../assets/image/buku2.jpg"
import buku3Image from "../assets/image/buku3.jpg"
const Umum = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-dark">BUKU UMUM</h1>
                <br />
                <Row>
                    <Col md={4}  className="umumWrapper" id="umum">
                        <Card className="gambarBuku">
                            <Image 
                                src={buku1Image} alt="" 
                                className="imagepop"
                            />
                            <div className="bg-dark text-white">
                                <div className="m-1 p-2">
                                    <Card.Title className="text-center">Card title</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting.
                                    </Card.Text>
                                    <Card.Text  className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>

                    <Col  md={4}  className="umumWrapper">
                        <Card className="gambarBuku">
                            <Image 
                                src={buku2Image} alt="" 
                                className="imagepop"
                            />
                            <div className="bg-dark text-white">
                                <div className="m-1 p-2">
                                    <Card.Title className="text-center">Card title</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting.
                                    </Card.Text>
                                    <Card.Text  className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>

                    <Col  md={4}  className="umumWrapper">
                        <Card className="gambarBuku">
                            <Image 
                                src={buku3Image} alt="" 
                                className="imagepop"
                            />
                            <div className="bg-dark text-white">
                                <div className="m-1 p-2">
                                    <Card.Title className="text-center">Card title</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting.
                                    </Card.Text>
                                    <Card.Text  className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>

                    <Col md={4}  className="umumWrapper">
                        <Card className="gambarBuku">
                            <Image 
                                src={buku1Image} alt="" 
                                className="imagepop"
                            />
                            <div className="bg-dark text-white">
                                <div className="m-1 p-2">
                                    <Card.Title className="text-center">Card title</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting.
                                    </Card.Text>
                                    <Card.Text  className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>

                    <Col  md={4}  className="umumWrapper">
                        <Card className="gambarBuku">
                            <Image 
                                src={buku2Image} alt="" 
                                className="imagepop"
                            />
                            <div className="bg-dark text-white">
                                <div className="m-1 p-2">
                                    <Card.Title className="text-center">Card title</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting.
                                    </Card.Text>
                                    <Card.Text  className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>

                    <Col  md={4}  className="umumWrapper">
                        <Card className="gambarBuku">
                            <Image 
                                src={buku3Image} alt="" 
                                className="imagepop"
                            />
                            <div className="bg-dark text-white">
                                <div className="m-1 p-2">
                                    <Card.Title className="text-center">Card title</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting.
                                    </Card.Text>
                                    <Card.Text  className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
        )
    }
    
    export default Umum