import { Cell } from "../classes/cell";

export function getVertex(T: Cell) {
  let vertexes: { x: number; y: number }[] = [];
  let dc = T._dw / 3;
  let dr = T._dh / 3;
  let rs = T._r * T._dh;
  let cs = T._c * T._dw;
  let ce = cs + T._dw;
  let re = rs + T._dh;
  vertexes.push({ x: cs, y: rs + dr });
  vertexes.push({ x: cs, y: rs + 2 * dr });
  vertexes.push({ x: cs + dc, y: re });
  vertexes.push({ x: cs + 2 * dc, y: re });

  vertexes.push({ x: ce, y: rs + 2 * dr });
  vertexes.push({ x: ce, y: rs + dr });
  vertexes.push({ x: cs + dc * 2, y: rs });

  vertexes.push({ x: cs + dc, y: rs });

  return vertexes;
}
