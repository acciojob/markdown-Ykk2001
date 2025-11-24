import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
export default function MarkDownEditor() {
const[input,setInput]=useState('# Heading');
const[preview,setPreview]=useState('')

useEffect(()=>{
   setPreview(input)
},[input])
  return (
    <div className='container'>
        
        <textarea className='textarea' placeholder='Write markdown text here...' value={input} onChange={(e)=>setInput(e.target.value)}>

        </textarea>

        <div className='preview'>
         <Markdown >{preview}</Markdown>
        </div>
    </div>
  )
}

// 