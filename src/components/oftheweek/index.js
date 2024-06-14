import { PlayerOfTheWeek } from "./playeroftheweek";
import { GameOfTheWeek } from "./gameoftheweek";

export default function OfTheWeek() {
  return (
    <div class="container">
      <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 text-light bg-primary text-center py-1 my-1 rounded-2">
        <PlayerOfTheWeek />
      </div>

      <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 text-light bg-primary text-center py-1 my-1 rounded-2">
        <GameOfTheWeek />
      </div>
    </div>
  );
}
