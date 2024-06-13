import playerImage from "../../assets/img/players/faker.png";
import playerFlag from "../../assets/img/flags/kr.png";
import playerRole from "../../assets/img/roles/MidlaneLogoCard.svg";
import playerTeam from "../../assets/img/teams/t1.png";
import playerPick1 from "../../assets/img/champs/zed.png";
import playerPick2 from "../../assets/img/champs/leblanc.png";
import playerPick3 from "../../assets/img/champs/ahri.png";
import playerPick4 from "../../assets/img/champs/azir.png";

export function PlayerOfTheWeek() {
  return (
    <>
      <div class="row">
        <h5 class="mt-1">Joueur de la semaine</h5>
      </div>
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
      <div class="col py-2">
        <span>Picks favoris : </span>
        <img
          src={playerPick1}
          alt="Icône d'un champion"
          class="img-fluid rounded"
        />
        <img
          src={playerPick2}
          alt="Icône d'un champion"
          class="img-fluid rounded"
        />
        <img
          src={playerPick3}
          alt="Icône d'un champion"
          class="img-fluid rounded"
        />
        <img
          src={playerPick4}
          alt="Icône d'un champion"
          class="img-fluid rounded"
        />
      </div>
      <div class="row my-3 justify-content-center">
        <div class="col-3 align-self-center bg-secondary py-3 px-0 mx-2 rounded-2">
          <p class="m-0">Win Rate</p>
        </div>
        <div class="col-5 align-self-center">
          <div class="row p-0 bg-secondary rounded-2 mb-1">
            <div class="col-5 p-0">équipe:</div>
            <div class="col-2 p-0">60</div>
            <div class="col-2 p-0">%</div>
            <div class="col-3 p-0">160</div>
          </div>
          <div class="row p-0 bg-secondary rounded-2">
            <div class="col-5 p-0">soloQ:</div>
            <div class="col-2 p-0">57</div>
            <div class="col-2 p-0">%</div>
            <div class="col-3 p-0">85</div>
          </div>
        </div>
        <div class="col-2 align-self-center bg-secondary py-3 px-0 mx-2 rounded-2">
          <p class="m-0">Games</p>
        </div>
      </div>
    </>
  );
}
