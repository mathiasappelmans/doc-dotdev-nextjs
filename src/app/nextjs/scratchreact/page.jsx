'use client';

import CodeBlock from '@/app/components/CodeBlock';
import { Typography } from '@mui/material';

const Page = () => {
  
  const text = ` npm create vite@latest react-app

 cd react-app

 npm install

 install tailwind https://tailwindcss.com/docs/installation/using-vite

 Remove src/App.css

 Delete all the content of src/index.css

 Add this line at the top of src/index.css
 @import "tailwindcss"

 npm install react-icons --save

 npm run dev`;
  const text1 = `import { FaBeer } from "react-icons/fa"
import { TbCarFilled } from "react-icons/tb";

const App = () => {
  return (
    <div className="max-w-md m-auto my-6">
      <FaBeer className="text-amber-400 text-9xl" />
      <TbCarFilled className="text-8xl" />
    </div>
  )
}

export default App`;
    
    return (
    <main>
      <Typography variant="h6" component="div" sx={{mb:2}}>
      ✨ React + Tailwind 4 + react-icons from scratch
      </Typography>
      <CodeBlock text={text} />
      <Typography variant="h7" component="div" sx={{mb:2}}>
      ✨ React-icons
      </Typography>
      <CodeBlock text={text1} />
    </main>
  )
}

export default Page