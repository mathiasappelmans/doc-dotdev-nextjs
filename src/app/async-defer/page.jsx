import { Link, Typography } from "@mui/material";
import Image from "next/image";
import ImageModal from "@/app/components/ImageModal";
import CodeBlock from "@/app/components/CodeBlock";

const page = () => {

  const text = `'use client'

import { useEffect, useState } from "react"


const MyUseEffect = () => {

    const [title, setTitle] = useState("")
    const [firstName, setFirstName] = useState("")

    useEffect(() => {
      document.title = title
      console.log('rendering...')
    }, [title]);


    return (
      <main className="flex flex-col p-4 bg-gray-900">    
        <input 
          type="text" 
          onChange={e => setTitle(e.target.value)} 
          className="m-4 bg-gray-800" 
          placeholder="title" 
        />
        <input 
          type="text" 
          onChange={e => setFirstName(e.target.value)} 
          className="m-4 bg-gray-800" 
          placeholder="first name"
        />
      </main>
    )
}

export default MyUseEffect`;

  return (
    <div className='text-sm'>
      
      <CodeBlock text={`<script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/145639873.js"></script>`} />
      
      <Typography sx={{ mb: 4 }}>
      </Typography>
      <ImageModal img={"/async-defer.png"} />
    </div>
  )
}

export default page