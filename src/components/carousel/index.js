import { PrevButton, NextButton } from "./buttons";
import { Image } from "./image";

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
            <Image />
          </div>
          <PrevButton />
          <NextButton />
        </div>
      </div>
    </div>
  );
}
