import Team1 from "../../assets/img/teams/t1.png";
import Team2 from "../../assets/img/teams/g2.png";

export function Teams() {
  return (
    <>
      <img src={Team1} alt="Logo de l'équipe T1" class="img-fluid" />
      <span class="fw-bold">T1 - G2</span>
      <img src={Team2} alt="Logo de l'équipe G2" class="img-fluid" />
    </>
  );
}
