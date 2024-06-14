import playerImage from "../../assets/img/players/faker.png";
import playerFlag from "../../assets/img/flags/kr.png";
import playerRole from "../../assets/img/roles/MidlaneLogoCard.svg";
import playerTeam from "../../assets/img/teams/t1.png";

export function Player() {
  return (
    <>
      <div class="col py-2">
        <img
          src={playerImage}
          alt="Portrait du joueur de la semaine"
          class="img-fluid border border-dark border-1 rounded bg-secondary"
        />
        <figcaption class="figure-caption text-light">Faker - T1</figcaption>
      </div>
      <div class="d-flex justify-content-center my-2 align-items-center">
        <img src={playerFlag} class="rounded mx-2 d-block" alt="..." />
        <img src={playerRole} class="rounded mx-2 d-block" alt="..." />
        <img src={playerTeam} class="rounded mx-2 d-block" alt="..." />
      </div>
    </>
  );
}
