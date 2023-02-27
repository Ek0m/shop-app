import React, { useEffect, useState } from "react";
import '../styles/home.css'
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import Helmet from "../component/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import Services from "../Services/Services";
import ProductsList from "../component/UI/ProductsList";
import products from "../assets/data/products";


function Home(){

    const [trendingProduct, setTrendingProduct] = useState([])
    const [bestSalesProduct, setBestSalesProduct] = useState([])
    const [mobileProduct, setMobileProduct] = useState([])
    const [wirelessProduct, setWirelessProduct] = useState([])
    const [popularProduct, setPopularProduct] = useState([])
    

    const year = new Date().getFullYear

    useEffect(() => {
        const filteredTrendingProducts = products.filter(item => item.category === 'chair')
        const filteredBestSalesProducts = products.filter(item => item.category === 'sofa')
        const filteredMobileProducts = products.filter(item => item.category === 'mobile')
        const filteredWirelessProducts = products.filter(item => item.category === 'wireless')
        const filteredPopularProducts = products.filter(item => item.category === 'watch')


        setTrendingProduct(filteredTrendingProducts)
        setBestSalesProduct(filteredBestSalesProducts)
        setMobileProduct(filteredMobileProducts)
        setWirelessProduct(filteredWirelessProducts)
        setPopularProduct(filteredPopularProducts)
    }, [])


    return(
        <Helmet title={'Home'}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subtitle">Trending product in {year}</p>
                                <h2>Make Your Interior More Minimalistic & Modern</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnam doloribus sit modi officiis, quidem voluptate impedit neque sapiente quos.</p>
                                <motion.button whileTap={{scale: 1.2}} className="buy__btn"><Link to='/shop' >SHOP NOW</Link></motion.button>
                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className="hero__image">
                                <img src={heroImg} alt=""  />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />

            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section__title">Trending Products</h2>
                        </Col>
                        <ProductsList data={trendingProduct} />
                    </Row>
                </Container>
            </section>

            <section className="best__sales">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section__title">Best Sales</h2>
                        </Col>

                        <ProductsList data={bestSalesProduct} />
                    </Row>
                </Container>
            </section>

            <section className="new__arrivals">
            <Container>
                    <Row>
                        <Col lg='12' className="text-center mb-5">
                            <h2 className="section__title">New Arrivals</h2>
                        </Col>

                        <ProductsList data={mobileProduct} />
                        <ProductsList data={wirelessProduct} />
                    </Row>
                </Container>
            </section>

            <section className="popular__category">
                <Container>
                        <Row>
                            <Col lg='12' className="text-center mb-5">
                                <h2 className="section__title">Popular in Category</h2>
                            </Col>

                            <ProductsList data={popularProduct} />
                           
                        </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home;