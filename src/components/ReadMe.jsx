import React,{ useMemo } from 'react';
import { base64ToBytes } from '../utils/base64';

const ReadMe = ({ content }) => {
    const data = useMemo(() => content ? new TextDecoder().decode(base64ToBytes(content)): 'No Read Me fouund !', []);

    return <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-4 w-[60rem] mx-auto bg-slate-300">
        <pre className="whitespace-pre-wrap">
        <code>{data}</code>
        </pre>
    </div>
}

export default ReadMe;