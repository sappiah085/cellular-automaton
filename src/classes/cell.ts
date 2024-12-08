import p5 from "p5";
import { getVertex } from "../utility/getVertex";

export class Cell {
  _r: number;
  _c: number;
  _neighbors: this[];
  _dw: number;
  _dh: number;
  _dead: boolean;
  _sides: number;
  constructor(r: number, c: number, dw: number, dh: number) {
    this._c = c;
    this._dw = dw;
    this._dh = dh;
    this._r = r;
    this._dead = false;
    this._neighbors = [];
    this._sides = 6;
  }

  draw(p5: p5) {
    let color = "";
    p5.stroke(0);
    if (this._dead) {
      color = "black";
    } else {
      color = "lightgreen";
    }
    // p5.beginShape();
    // getVertex(this).forEach((cell) => p5.vertex(cell.x, cell.y));
    // p5.endShape();
    p5.fill(color);
    p5.rect(this._c * this._dw, this._r * this._dh, this._dw, this._dh);
  }
}
