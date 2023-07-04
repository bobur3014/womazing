import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function FirstCreenSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
            <h2 className="left-title">
                Новые поступления <br/>
                    в этом сезоне
            </h2>
            <p className="left-subtitle">Утонченные сочетания и бархатные <br/>
                оттенки - вот то, что вы искали в этом
                    сезоне. Время исследовать.
            </p>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
            <h2 className="left-title">
              Включай новый сезон <br/> с WOMAZING
            </h2>
            <p className="left-subtitle">Утонченные сочетания и бархатные <br/>
              Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров
            </p>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
            <h2 className="left-title">
              Что-то новенькое. <br/> Мы заждались тебя.
            </h2>
            <p className="left-subtitle">Надоело  искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!
            </p>
      </Carousel.Item>
    </Carousel>
  );
}

export default FirstCreenSlider;