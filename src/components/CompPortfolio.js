import React from 'react'
import Carousel from 'react-multi-carousel'
import port1 from './../assets/port-1.png'
import port2 from './../assets/port-2.png'
import port3 from './../assets/port-3.png'
import port4 from './../assets/port-4.jpg'
import port5 from './../assets/port-5.png'
import port6 from './../assets/port-6.jpg'

const CompPortfolio = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 768 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section id="portfolio" className="col-10 container text-center">
            <h2>Portfolio</h2>
            <p>My Recent Projects</p>
            <Carousel responsive={responsive} infinite={true} itemClass="itemPortfolio">
                <div className="card col-8">
                    <img src={port5} className="card-img-top" alt="img"></img>
                    <div className="card-body">
                        <h5 className="card-title">Web App</h5>
                        <h6 className="card-title">Landing Page - Login - Dashboard</h6>
                        <a href="https://aprizalabyan.github.io/login-admin-page/" target="_blank" rel="noreferrer">
                            <p className="card-text fst-italic text">Preview <i className="bi bi-arrow-right"></i></p>
                        </a>
                    </div>
                </div>
                <div className="card col-8">
                    <img src={port6} className="card-img-top" alt="img"></img>
                    <div className="card-body">
                        <h5 className="card-title">Web App</h5>
                        <h6 className="card-title">Jadwal Dokter Online</h6>
                        <a href="https://aprizalabyan.github.io/jadwal-dokter/" target="_blank" rel="noreferrer">
                            <p className="card-text fst-italic text">Preview <i className="bi bi-arrow-right"></i></p>
                        </a>
                    </div>
                </div>
                <div className="card col-8">
                    <img src={port4} className="card-img-top" alt="img"></img>
                    <div className="card-body">
                        <h5 className="card-title">Web Design</h5>
                        <h6 className="card-title">Coolstore - Online Store</h6>
                        <a href="https://aprizalabyan.github.io/coolstore/" target="_blank" rel="noreferrer">
                            <p className="card-text fst-italic text">Preview <i className="bi bi-arrow-right"></i></p>
                        </a>
                    </div>
                </div>
                <div className="card col-8">
                    <img src={port2} className="card-img-top" alt="img"></img>
                    <div className="card-body">
                        <h5 className="card-title">Web Design</h5>
                        <h6 className="card-title">Admin Dashboard</h6>
                        <a href="https://aprizalabyan.github.io/e-gym-dashboard/" target="_blank" rel="noreferrer">
                            <p className="card-text fst-italic">Preview <i className="bi bi-arrow-right"></i></p>
                        </a>
                    </div>
                </div>
                <div className="card col-8">
                    <img src={port3} className="card-img-top" alt="img"></img>
                    <div className="card-body">
                        <h5 className="card-title">Web App</h5>
                        <h6 className="card-title">Spreadsheet API</h6>
                        <a href="https://aprizalabyan.github.io/contact-list/" target="_blank" rel="noreferrer">
                            <p className="card-text fst-italic">Preview <i className="bi bi-arrow-right"></i></p>
                        </a>
                    </div>
                </div>
                <div className="card col-8">
                    <img src={port1} className="card-img-top" alt="img"></img>
                    <div className="card-body">
                        <h5 className="card-title">Web Design</h5>
                        <h6 className="card-title">Lombok Travel</h6>
                        <a href="https://aprizalabyan.github.io/lombok-trv/" target="_blank" rel="noreferrer">
                            <p className="card-text fst-italic">Preview <i className="bi bi-arrow-right"></i></p>
                        </a>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}

export default CompPortfolio