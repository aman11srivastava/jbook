import React from 'react'
import Editor from "@monaco-editor/react";
import MonacoEditor from 'react-monaco-editor';

export const CodeEditor = () => {
    return(
        <>
            <MonacoEditor
                height={"500px"}
                language="javascript"
                theme="vs-dark"

            />
        </>
    )
}

export default CodeEditor
