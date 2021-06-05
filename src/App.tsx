import React, {useEffect, useRef, useState} from "react";
import * as esbuild from 'esbuild-wasm'

export const App = () => {
    const ref = useRef<any>();
    const [input, setInput] = useState<string>('')
    const [code, setCode] = useState<string>('')

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        });

    }

    const handleClick  = async () => {
        if (!ref.current){
            return;
        }
        const result = await ref.current.transform(input, {
            loader: 'jsx',
            target: 'es2015'
        })
        // console.log(result)
        setCode(result.code)
    }

    useEffect(() => {
        startService();
    }, [])

    return (
        <div>
            <textarea value={input} onChange={(event => setInput(event.target.value))}/>
            <div>
                <button onClick={handleClick}>Submit</button>
            </div>
            <pre>{code}</pre>
        </div>
    )
}

export default App
