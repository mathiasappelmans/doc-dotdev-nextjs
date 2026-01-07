import { Typography } from "@mui/material";
import Image from "next/image";
import ImageModal from "@/app/components/ImageModal";

const page = () => {

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