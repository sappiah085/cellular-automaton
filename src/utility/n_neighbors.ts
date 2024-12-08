import { Cell } from "../classes/cell";

export const getNumberOfNeighbors = (n: Cell[]) => {
  let n_live_neighbors = 0;
  n.forEach((cell) => {
    if (!cell._dead) n_live_neighbors++;
  });
  return n_live_neighbors;
};
