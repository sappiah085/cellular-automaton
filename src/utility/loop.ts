
type arg<T> = {
  array: T[][];
  callback: (T: T) => void;
};
export const loop = <T>({ callback, array }: arg<T>) => {
  array.forEach((_, r) =>
    array[r].forEach((_, c) => {
      callback(array[r][c]);
    })
  );
};
