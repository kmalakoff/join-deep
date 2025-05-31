import reduceDeep from 'reduce-deep';

export type NestedArray<T> = T | NestedArray<T>[];

export default function joinDeep<T>(array: NestedArray<T>[], sep: string) {
  let hasJoined = false;

  return reduceDeep(
    array,
    (memo, value) => {
      if (hasJoined) memo += sep;
      else hasJoined = true;
      memo += value === undefined ? '' : value;
      return memo;
    },
    ''
  );
}
