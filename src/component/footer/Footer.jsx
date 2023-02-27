import React from "react";
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";

function Footer(){

    const year = new Date().getFullYear()

    return(
       <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4' className="mb-4">
                        <div className="logo">
                               
                                <div>
                                    <h1 className="text-white">Home-mart</h1>
                                    
                                </div>
                                
                            </div>
                            <p className="footer__text mt-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsam quis! Similique veniam voluptatem hic magni maiores fuga assumenda! Accusantium.
                                </p>

                    </Col>

                    <Col lg='3' className="mb-4">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Top Categories</h4>
                            <ListGroup className="mb-3">

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Smart Watch</Link>
                                </ListGroupItem>


                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2' className="mb-4">
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">Useful Links</h4>
                            <ListGroup className="mb-3">

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/'>privacy policy</Link>
                                </ListGroupItem>


                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3' className="mb-4">
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contact</h4>
                            <ListGroup className="footer__contact">

                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-instagram-line"></i></span>
                                    <p>Instagram</p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-twitter-line"></i></span>
                                    <p>Twitter</p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-home-8-line"></i></span>
                                    <p>Address - plot gambia street</p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-phone-line"></i></span>
                                    <p>000-000-000</p>
                                </ListGroupItem>
                                
                                
                            </ListGroup>
                        </div>
                    </Col>


                    <Col lg='12' className="mb-4">
                        <p className="footer__copyright">Copyright {year} developed by Nkanga Ekomabasi. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
       </footer>
    )
}

export default Footer;