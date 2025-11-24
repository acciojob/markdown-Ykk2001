import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
export default function MarkDownEditor() {
const[input,setInput]=useState('# Hello');
const[preview,setPreview]=useState('');
const[loading,setLoading]=useState(false);

useEffect(()=>{
    setLoading(true);

    const t=setTimeout(()=>{
       setPreview(prev=>prev+input);
       setLoading(false);
    },300);

    return ()=>clearTimeout(t);

   
},[input])
  return (
    <div className='container'>
        
        <textarea className='textarea' placeholder='Write markdown text here...' value={input} onChange={(e)=>setInput(e.target.value)}>

        </textarea>

        <div className='preview'>
            {loading && <h1 className="loading">Rendering preview...</h1>}
         <Markdown >{preview}</Markdown>
        </div>
    </div>
  )
}

// 