import Carousel from 'react-bootstrap/Carousel';
import image02 from './../assets/images/02.jpg';

import letreiro_loja from './../assets/images/letreiro_loja.jpg';

function CarouselComponent() {
    return (
        <Carousel fade id="home">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{borderRadius: 0}}
                    src={letreiro_loja}
                    alt="Produtos Sigatec Informática"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{borderRadius: 0}}
                    src={image02}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;