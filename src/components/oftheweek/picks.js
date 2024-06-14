import playerPick1 from "../../assets/img/champs/zed.png";
import playerPick2 from "../../assets/img/champs/leblanc.png";
import playerPick3 from "../../assets/img/champs/ahri.png";
import playerPick4 from "../../assets/img/champs/azir.png";

export function Picks() {
  return (
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
  );
}
