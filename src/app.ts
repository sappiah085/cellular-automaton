import P5 from "p5";
import "p5/lib/addons/p5.dom";
import { draw } from "./functions/draw";
import { setup } from "./functions/setup";
import { Grid } from "./classes/grid";
import { variables } from "./common/variables";
import { CellularAutomaton } from "./classes/cellular_automaton";
import { Cellular_Automata } from "./classes/cellular_automata";
// import "p5/lib/addons/p5.sound";
export const grid = new Grid(variables.r, variables.c)
  .create(variables.dr)
  .neighbors();
const r = grid[variables.start.r][variables.start.c];
export const gridA = new Grid(140, variables.c).create(1)._grid;
const s = gridA[0][Math.floor(gridA.length / 2)];
s._dead = false;

export const cellular_automaton = new CellularAutomaton(r);
export const cellular_automata = new Cellular_Automata(120, gridA);
const sketch = (p5: P5) => {
  p5.setup = () => setup(p5);
  p5.draw = () => draw(p5);
};

new P5(sketch);
