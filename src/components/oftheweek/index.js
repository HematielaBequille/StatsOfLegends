import { PlayerOfTheWeek } from "./player";

export default function OfTheWeek() {
  return (
    <div class="container">
      <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 text-light bg-primary text-center py-1 my-1 rounded-2">
        <PlayerOfTheWeek />
      </div>

      <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 text-light bg-primary text-center py-1 my-1 rounded-2">
        <div class="row justify-content-center text-light text-center p-3">
          <h5>Match de la semaine</h5>
        </div>
        <div class="row">
          <div class="col-12 text-light text-center p-3">
            <img
              src="./assets/img/logos/t1.png"
              alt="Logo de l'équipe T1"
              class="img-fluid"
            />
            <span class="fw-bold">T1 - G2</span>
            <img
              src="./assets/img/logos/g2.png"
              alt="Logo de l'équipe G2"
              class="img-fluid"
            />
            <p class="fst-italic m-0">MSI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
