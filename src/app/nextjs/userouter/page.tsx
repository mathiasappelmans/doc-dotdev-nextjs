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
      <div className="flex items-center mt-5">
        <Image src="/react.svg" width={30} height={0} className="-mt-8 mr-3" alt="GitLab logo" />
        <Typography variant="h5" sx={{ fontWeight: '600' }} mb={4}>
          useRouter
        </Typography>
      </div>
      <ImageModal img={"/useRouter.png"} />
    </div>
  )
}

export default page