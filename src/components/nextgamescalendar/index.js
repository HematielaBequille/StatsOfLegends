import { TeamLogo } from "./teamlogo";
import { Game } from "./game";
import { League } from "./league";
import { BillGame } from "./billgame";

export default function NextGamesCalendar() {
  return (
    <div class="container bg-primary">
      <div class="col-5 text-light bg-primary custom-section">
        <h6 class="text-center">Calendrier des prochains matchs</h6>

        <div class="row bg-secondary">
          <div class="col-6 p-1">
            <Game />
            <League />
          </div>
          <div class="col-6 text-center p-1">
            <TeamLogo />
            <BillGame />
            <TeamLogo />
          </div>
        </div>
        <div class="row bg-primary">
          <div class="col-6 p-1">
            <Game />
            <League />
          </div>
          <div class="col-6 text-center p-1">
            <TeamLogo />
            <BillGame />
            <TeamLogo />
          </div>
        </div>
        <div class="row bg-secondary">
          <div class="col-6 p-1">
            <Game />
            <League />
          </div>
          <div class="col-6 text-center p-1">
            <TeamLogo />
            <BillGame />
            <TeamLogo />
          </div>
        </div>
      </div>
    </div>
  );
}
