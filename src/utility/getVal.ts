export function getBol(
  ob: { l: boolean; m: boolean; r: boolean },
  pattern: boolean[]
) {
  if (ob.l && ob.r && ob.m) return pattern[0];
  if (ob.l && !ob.r && ob.m) return pattern[1];
  if (ob.l && ob.r && !ob.m) return pattern[2];
  if (ob.l && !ob.r && !ob.m) return pattern[3];
  if (!ob.l && ob.r && ob.m) return pattern[4];
  if (!ob.l && !ob.r && ob.m) return pattern[5];
  if (!ob.l && ob.r && !ob.m) return pattern[6];
  if (!ob.l && !ob.r && !ob.m) return pattern[7];
}
