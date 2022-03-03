


export default function arrayEquality<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false;
  a.sort();
  b.sort();
  return a.every((element, index) => {
    return element === b[index]
  });
}