export function PrevButton() {
  return (
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon border border-light rounded"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
  );
}

export function NextButton() {
  return (
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon border border-light rounded"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  );
}
