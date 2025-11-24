import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
export default function MarkDownEditor() {
const[input,setInput]=useState(`# Heading\n\nType *Markdown* here.\n\n- Try a list\n- **bold** text\n\n1. Numbered\n2. Items`);
const[preview,setPreview]=useState('');
const[loading,setLoading]=useState(false);

useEffect(()=>{
    setLoading(true);

    const t=setTimeout(()=>{
       setPreview(input);
       setLoading(false);
    },300);

    return()=>clearTimeout(t);

   
},[input])
  return (
    <div className='container'>
        
        <textarea className='textarea' placeholder='Write markdown text here...' value={input} onChange={(e)=>setInput(e.target.value)}>

        </textarea>

        <div className='preview'>
            {loading && <div className="loading">Rendering preview...</div>}
         <Markdown >{preview}</Markdown>
        </div>
    </div>
  )
}

// 