import { useCallback, useState, type ChangeEvent } from "react";
import debouncer from "../debounce";

export default function Debounce () {
    const [input, setinput] = useState("")
    function onChangeHandler(e: ChangeEvent<HTMLInputElement>){
                  setinput(e.target.value)
                  dlog(e)
    }
    function onchangeLogger(e: ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
    }
    
    const dlog = useCallback(debouncer(onchangeLogger,1000),[])
    return (<>
        <input onChange={onChangeHandler} value={input}/>
        <ul id="results-list"></ul>
    </>)
}