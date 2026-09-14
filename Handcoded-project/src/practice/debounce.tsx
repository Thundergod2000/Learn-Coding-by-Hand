import { useCallback, useState, type ChangeEvent, type ChangeEventHandler } from "react";

function debounce(onChangeHandler:Function,wait:number): ChangeEventHandler<HTMLInputElement>{
        let timeoutID:ReturnType<typeof setTimeout>;
        return function (...args){
            clearTimeout(timeoutID)
            timeoutID = setTimeout(() => {
                onChangeHandler(...args)
            }, wait);
        }
    }
export default function Debounce () {
    const [input, setinput] = useState("")
    function onChangeHandler(e: ChangeEvent<HTMLInputElement>){
                  setinput(e.target.value)
                  dlog(e)
    }
    function onchangeLogger(e: ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
    }
    
    const dlog = useCallback(debounce(onchangeLogger,1000),[])
    return (<>
        <input onChange={onChangeHandler} value={input}/>
        <ul id="results-list"></ul>
    </>)
}