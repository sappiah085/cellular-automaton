import { getBol } from "../utility/getVal";
import { Cell } from "./cell";

export class Cellular_Automata {
  _initialGrid: Cell[][];
  _n: number;
  _pattern: boolean[];
  _i: number = 1;
  _workingGrid: Cell[];
  constructor(n: number, grid: Cell[][]) {
    this._initialGrid = grid;
    this._n = n;
    this._workingGrid = [];
    this._pattern = this._n
      .toString(2)
      .padStart(8, "0")
      .split("")
      .map((el) => el === "0");
  }

  algorithm() {
    if (this._i > this._initialGrid.length - 1) return false;
    for (let i = 0; i < this._initialGrid[this._i].length; i++) {
      let l = false,
        r = false,
        m = this._initialGrid[this._i - 1][i]._dead;
      if (i - 1 >= 0) {
        l = this._initialGrid[this._i - 1][i - 1]._dead;
      } else {
        l =
          this._initialGrid[this._i - 1][this._initialGrid[this._i].length - 1]
            ._dead;
      }
      if (i + 1 < this._initialGrid[this._i - 1].length) {
        r = this._initialGrid[this._i - 1][i + 1]._dead;
      } else {
        r = this._initialGrid[this._i - 1][0]._dead;
      }
      this._initialGrid[this._i][i]._dead = getBol(
        { l, m, r },
        this._pattern
      ) as boolean;
    }

    this._i++;
    return true;
  }
}
