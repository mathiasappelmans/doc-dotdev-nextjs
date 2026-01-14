import { Link, Typography } from "@mui/material";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";

const page = () => {

  return (
    <div className='flex flex-col gap-10'> 

      <div className="flex items-center mt-5">
        <Image src="/git.png" width={70} height={0} className="-mt-8 mx-4" alt="Docker logo" />
        <Typography variant="h4" sx={{ fontWeight: '600' }} mb={4}>
          Git
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: '600' }} mb={4} ml={4}>
          every day commands
        </Typography>
      </div>

      <div className="flex flex-col">        
        <Typography variant="body1">
          All commits  (Graph)
        </Typography>
				<CodeBlock lang="jsx" text={`git log --oneline --graph --decorate`} className="" />
      </div>

    </div>
  )
}

export default page