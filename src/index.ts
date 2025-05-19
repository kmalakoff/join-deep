import reduceDeep from 'reduce-deep';

export default function joinDeep(array, sep) {
  const length = array == null ? 0 : array.length;
  let hasJoined = false;

  return length
    ? reduceDeep(
        array,
        (memo, value) => {
          if (hasJoined) memo += sep;
          else hasJoined = true;
          if (value !== undefined) memo += value;
          return memo;
        },
        ''
      )
    : '';
}
