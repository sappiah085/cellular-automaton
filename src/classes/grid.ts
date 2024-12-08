import { variables } from "../common/variables";
import { loop } from "../utility/loop";
import { Cell } from "./cell";

export class Grid {
  _r_number: number;
  _c_number: number;
  _grid: Cell[][];
  constructor(r: number, c: number) {
    this._r_number = r;
    this._c_number = c;
    this._grid = new Array(this._r_number);
    for (let i = 0; i < this._r_number; i++) {
      this._grid[i] = new Array(this._c_number);
    }
  }

  create(dead_ratio: number) {
    for (let r = 0; r < this._r_number; r++) {
      for (let c = 0; c < this._c_number; c++) {
        let cell = new Cell(
          r,
          c,
          variables.dimension / this._c_number,
          variables.dimension / this._r_number
        );

        if (Math.random() < dead_ratio) cell._dead = true;
        this._grid[r][c] = cell;
      }
    }
    return this;
  }

  neighbors() {
    loop({
      callback: (T) => {
        if (T._r - 1 > 0) T._neighbors.push(this._grid[T._r - 1][T._c]);
        if (T._r + 1 < this._r_number)
          T._neighbors.push(this._grid[T._r + 1][T._c]);
        if (T._c - 1 > 0) T._neighbors.push(this._grid[T._r][T._c - 1]);
        if (T._c + 1 < this._c_number)
          T._neighbors.push(this._grid[T._r][T._c + 1]);
        if (T._c - 1 > 0 && T._r - 1 > 0)
          T._neighbors.push(this._grid[T._r - 1][T._c - 1]);
        if (T._c + 1 < this._c_number && T._r + 1 < this._r_number)
          T._neighbors.push(this._grid[T._r + 1][T._c + 1]);
        if (T._c - 1 > 0 && T._r + 1 < this._r_number)
          T._neighbors.push(this._grid[T._r + 1][T._c - 1]);
        if (T._r - 1 > 0 && T._c + 1 < this._c_number)
          T._neighbors.push(this._grid[T._r - 1][T._c + 1]);
      },
      array: this._grid,
    });
    return this._grid;
  }
}
