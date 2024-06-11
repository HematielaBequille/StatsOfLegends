import { PrevButton, NextButton } from "./buttons";

export default function Carousel() {
  return (
    <div class="container-fluid">
      <div class="container">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner custom-carousel ratio ratio-16x9">
            <div class="carousel-item active">
              <img
                src="./assets/img/carousel_1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="./assets/img/carousel_2.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="./assets/img/carousel_3.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <PrevButton />
          <NextButton />
        </div>
      </div>
    </div>
  );
}
