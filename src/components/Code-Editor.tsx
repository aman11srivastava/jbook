import React, {useRef} from 'react'
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
    // onChange?(value: string): void;
    onChange: (value: string) => void;
}

export const CodeEditor = ({onChange}: CodeEditorProps) => {
    const monacoRef = useRef<any>(null);
    const onEditorDidMount = (editor: any, monacoEditor: any) => {
        // monacoRef.current = editor;
        // console.log(editor)
        monacoEditor.onDidChangeModelContent(() => {
            console.log(editor)
        })
    };

    // const onEditorDidMount = (getValue: () => string, monacoEditor: any) => {
    //     monacoEditor.onDidChangeModelContent(() => {
    //         onChange(getValue());
    //     })
    // };

    return(
        <>
            <Editor
                onMount={onEditorDidMount}
                defaultValue={"// Write your code here..."}
                height={"500px"}
                language={"javascript"}
                theme={"vs-dark"}
                options={{
                    wordWrap: 'on',
                    minimap: { enabled: false},
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true
                }}
            />
        </>
    )
}

export default CodeEditor
