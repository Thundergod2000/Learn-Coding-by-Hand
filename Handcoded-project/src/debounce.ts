import type { ChangeEventHandler } from "react";


export default function debouncer(onChangeHandler:Function,wait:number): ChangeEventHandler<HTMLInputElement>{
        let timeoutID:ReturnType<typeof setTimeout>;
        return function (...args: unknown[]){
            clearTimeout(timeoutID)
            timeoutID = setTimeout(() => {
                onChangeHandler(...args)
            }, wait);
        }
    }


