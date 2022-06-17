import React from 'react'
import { ReactComponent as MainImage } from '../../core/assets/images/car-header.svg';
import Button from '../../core/components/Button';
import './style.scss'

const Home = () => {

    return (
        <section className="home-container">
            <div className="home-card">
                <div className="home-image-container">
                    <MainImage />
                    <div className="content-header">
                        <h1>
                            O carro perfeito para você
                        </h1>
                        <p>
                            Conheça nossos carros e dê mais um passo na realização do seu sonho
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-catalog-nav">
                <div className="content-catalog-nav">
                    <Button text="ver catálogo" />
                    <p>Comece agora a navegar</p>
                </div>
            </div>
        </section>
    );
}

export default Home;
