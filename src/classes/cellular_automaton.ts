import { getNumberOfNeighbors } from "../utility/n_neighbors";
import { Cell } from "./cell";

export class CellularAutomaton {
  _t: number = 0;
  _toCheck: Set<Cell>;
  constructor(l: Cell) {
    this._toCheck = new Set();
    this._toCheck.add(l);
    console.log();
  }

  algorithm(): boolean {
    let l = this._toCheck.values().next().value as Cell;
    this._toCheck.delete(l);
    let n_live_neighbors = getNumberOfNeighbors(l._neighbors);
    if (
      (n_live_neighbors < 2 && !l._dead) ||
      (n_live_neighbors > 3 && !l._dead)
    ) {
      l._dead = true;
    } else if (l._dead && n_live_neighbors === 3) {
      l._dead = false;
    }
    l._neighbors.forEach((c) => this._toCheck.add(c));
    return true;
  }
}
