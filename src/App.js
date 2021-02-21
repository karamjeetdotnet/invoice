import React, { useState } from 'react';
import CreateInvoice from './CreateInvoice';
import PreviewInvoice from './PreviewInvoice';
var initState = {
    togglePreview: false
}
function App(){
    const [preview, togglePreview] = useState(false);
    return (
        <div>
        <button onClick={(e) => {
            e.preventDefault();
            togglePreview(state => !state);
        }}>Toggle preview</button>
    {preview ? <PreviewInvoice/> : <CreateInvoice/>}
    </div>)
}
export default App;