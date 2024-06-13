import Carousel1 from '../../assets/img/carousel/carousel_1.jpg'
import Carousel2 from '../../assets/img/carousel/carousel_2.jpeg'
import Carousel3 from '../../assets/img/carousel/carousel_3.jpeg'

export function Image() {
  return (
    <>
      <div class="carousel-item active">
        <img
          src={Carousel1}
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src={Carousel2}
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src={Carousel3}
          class="d-block w-100"
          alt="..."
        />
      </div>
    </>
  );
}
