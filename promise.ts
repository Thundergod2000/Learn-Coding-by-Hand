// const [user, posts, tags] = await Promise.all([
//   fetch('/api/user').then((r) => r.json()),
//   fetch('/api/posts').then((r) => r.json()),
//   fetch('/api/tags').then((r) => r.json()),
// ]);

type ReturnValue<T> = { -readonly [P in keyof T]: Awaited<T[P]> };

export default function promiseAll<T extends readonly unknown[] | []>(
  iterable: T,
): Promise<ReturnValue<T>> {
  return new Promise((resolve, reject) => {
    // Preserve input order even if the promises settle in a different order.
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results as ReturnValue<T>);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results as ReturnValue<T>);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}


type ReturnValue1<T> = { -readonly [P in keyof T ]: Awaited<T[P]>}


export function promiseAll1 <T extends readonly unknown[] | []> (
    iterable: T
): Promise<ReturnValue<T>> {
    return new Promise((resolve,reject)=>{
        const results = new Array(iterable.length);
        let unresolved = iterable.length;

        if(unresolved === 0) {
            resolve(results as ReturnValue<T>)
            return
        }

        iterable.forEach(async (item, index)=> {
            try {
                const value = await item;
                results[index] = value;
                unresolved -= 1;
                if (unresolved === 0){
                    resolve(results as ReturnValue<T>)
                }
            } catch (err) {
                reject(err)
            }
        })

    })
}

//1. define a type
// 2. write a function and give its types and return a promise
// 3. iterate over each item
const promise1 = new Promise((resolve)=>{
  setTimeout(resolve, 5000, 'Promise1');
})


const promise2 = new Promise((resolve,reject)=>{
  setTimeout(reject, 2000, 'Promise2');
})

const promise3 = new Promise((resolve)=>{
  setTimeout(resolve, 2000, 'Promise3');
})


Promise.all([promise1,promise2,promise3]).then((values)=>{
  console.log(values)
}).catch((err)=>{
  console.log(err);
  
})