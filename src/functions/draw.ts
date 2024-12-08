import p5 from "p5";
import { cellular_automata, cellular_automaton, grid, gridA } from "../app";
import { loop } from "../utility/loop";
import { Cellular_Automata } from "../classes/cellular_automata";
let run = true;
export const draw = (p5: p5) => {
  if (!run) return;
  // for (let i = 0; i < 20; i++) run = cellular_automaton.algorithm();
  run = cellular_automata.algorithm();
  // loop({ callback: (T) => T.draw(p5), array: grid });
  loop({ callback: (T) => T.draw(p5), array: gridA });
};
