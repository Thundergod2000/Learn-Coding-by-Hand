export default function flatten(value: unknown[]): unknown[] {
  return value.reduce<unknown[]>((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}

console.log(flatten([1, [2, [3]], 4]))


export function flatten1(value: unknown[]):unknown[]{
  return value.flat()
}

console.log(flatten1([1,[2]]))