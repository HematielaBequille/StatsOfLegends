import { Teams } from "./teams";

export function GameOfTheWeek() {
  return (
    <>
      <div class="row justify-content-center text-light text-center p-3">
        <h5>Match de la semaine</h5>
      </div>
      <div class="row">
        <div class="col-12 text-light text-center p-3">
          <Teams />
          <p class="fst-italic m-0">MSI</p>
        </div>
      </div>
    </>
  );
}
