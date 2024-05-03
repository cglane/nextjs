"use client"

import useTranslation from 'next-translate/useTranslation'
import { useStageStore } from "@/stores/stage";
import { updateProgress } from "@/app/lib/actions";
import { useRouter } from 'next/navigation'

export default function BottomNavigation(props:any) {
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
        <div className="w-full flex">
            <div className=' w-9/12  md:m-6'>
                <button onClick={goBackClickListener} className="mt-4 rounded-md bg-white px-4 py-3 text-xs font-medium text-black transition-colors hover:bg-blue-400 border-2"> 
                    <span className='p-4'>&#60;</span>
                    {props.buttonBack}
                </button>

            </div>
            <div className='w-3/12 md:m-6'>
                <button onClick={handleClickListener}className="mt-4 rounded-md bg-sky-950 px-4 py-3 text-xs text-white font-bold transition-colors hover:bg-blue-400">
                    {props.buttonNext}
                </button>  
            </div>

      </div>

    )
}