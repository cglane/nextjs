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
    return (
        <div className="w-full flex">
            <div className='flex'>
                <button>{props.buttonBack}</button>

            </div>
            <div className='flex float-right'>
                <button onClick={handleClickListener}className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
                    {props.buttonNext}
                </button>  
            </div>

      </div>

    )
}