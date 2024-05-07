"use client"
import BottomNavigation from '@/app/ui/setup/bottom_navigation';
import {
  WrenchIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation'
import { updateProgress } from "@/app/lib/actions";

export default  function LandingView(props:any) {      
    // TODO: Add props for bottom nav forward and backwards
        const router = useRouter()

    const handleClickListener = async () => {
        // let nextPathName = "/setup/practice_area/import"
        await updateProgress('1', props.nextPathName)
        router.push(props.nextPathName)
    };
    const goBackClickListener  = async () => {
        // let nextPathName = "/setup/practice_area/import"
        await updateProgress('1', props.lastPathName)
        router.push(props.lastPathName)
    };

      return (
      <div>
        <div className="w-12/12 h-3/6 md:h-auto bg-white rounded-md  md:p-20 items-center justify-center">
          <div className="flex items-center justify-center">
            <WrenchIcon className='w-10 h-10'/>
          </div>
          <br/>
          <h1 className='text-sky-950 font-bold text-base'>{props.header}</h1>
          <p className='text-xs leading-4 p-1'>{props.description}</p>
          <br/>
          <br/>
          <h1>Placeholder for Video...</h1> 
  
        </div>
          <BottomNavigation 
            buttonBack={props.buttonBack}
            buttonNext={props.buttonNext} 
            goBackClickListener={goBackClickListener}
            handleClickListener={handleClickListener}
            />
      </div>
    );
  }