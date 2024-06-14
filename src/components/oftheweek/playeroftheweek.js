import { Player } from "./player";
import { Picks } from "./picks";
import { Winrate } from "./winrate";

export function PlayerOfTheWeek() {
  return (
    <>
      <div class="row">
        <h5 class="mt-1">Joueur de la semaine</h5>
      </div>
      <Player />
      <Picks />
      <Winrate />
    </>
  );
}
