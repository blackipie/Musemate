
'use client'


import { ChevronRight} from "lucide-react";
import Button from "../Buttons/ButtonOne";
import { useRouter } from "next/navigation"

// components/Card.tsx
interface CardProps {
  title: string;
  description: string;
  link: string;
  icon: string
}
const Card: React.FC<CardProps> = ({ title, description, link,icon }) => {
   const router = useRouter()
  
  return (
    <div className="bg-neutral-900 ring-1 ring-neutral-700 items-center justify-between
      rounded-lg  p-4 flex flex-row gap-4 w-full" >
      <div className="flex flex-col gap-4">
      <h2 className="text-md lg:text-lg font-semibold">{title}</h2>
      <p className="text-neutral-400 text-sm">{description}</p>
          <Button onClick={()=>router.push(link)}  formTarget='_blank' className="text-md">
                    Open <ChevronRight size={16}/>
        </Button>

      </div>
      <div className="flex w-32 ">
        <img src={icon} className="invert rounded-lg mix-blend-screen" alt="" />
      </div>
    </div>
  );
};

export default Card; 