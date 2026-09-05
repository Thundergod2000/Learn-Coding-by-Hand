/**
 * @param {(...args: Array<unknown>) => unknown} func
 * @param {number} wait
 * @returns {(...args: Array<unknown>) => void}
 */

export function debounce2(func:Function, wait: number=0): Function {
    let timeoutID: ReturnType<typeof setTimeout> | null = null;
  return function( this: any, ...args: any[]){
    const context = this;
    clearTimeout(timeoutID ?? undefined);
    timeoutID = setTimeout(function(){
        timeoutID = null;
        func.apply(context,args)
    },wait)
  }
}


export default function debounce(func: Function, wait: number = 0): Function {
  let timeoutID: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any[]) {
    // Keep a reference to `this` so that
    // func.apply() can access it.
    const context = this;
    clearTimeout(timeoutID ?? undefined);

    timeoutID = setTimeout(function () {
      timeoutID = null; // Not strictly necessary but good to do this.
      func.apply(context, args);
    }, wait);
  };
}


export function debounce3(func:Function, wait:number): Function {
    let timeoutID:ReturnType<typeof setTimeout>;
    return function (this: Function,...args:unknown[]){
      clearTimeout(timeoutID)
      timeoutID = setTimeout(()=>{
        func.apply(this, args)
      }, wait)
    }
}