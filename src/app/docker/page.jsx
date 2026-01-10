import { Link, Typography } from "@mui/material";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const page = () => {

  return (
    <div className='text-sm'>
      <div className="flex items-center mt-5">
        <Image src="/Docker.svg" width={70} height={0} className="-mt-8 mx-4" alt="Docker logo" />
        <Typography variant="h5" sx={{ fontWeight: '600' }} mb={4}>
          Docker
        </Typography>
      </div>
      <Typography sx={{ my: 4 }}>
        <Link href="https://github.com/mathiasappelmans/docker-project" target="_blank">
          https://github.com/mathiasappelmans/docker-project
        </Link>
        <div className="flex gap-4">
				<ArrowRight size={24} />
          <span>README.md</span>
        </div>
      </Typography>
    </div>
  )
}

export default page