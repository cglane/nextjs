// import useTranslation from 'next-translate/useTranslation'
"use client"
import { useStageStore } from "@/stores/stage";
import StatusCheckBar from "./status_check_bar";
export default function ProgressHeader(props:any) {
    // const { t, lang } = useTranslation('progress')
    const { stage} = useStageStore();
    // Should we use store everywhere or just in the parent element?
    return (
        <div className='md:flex'> 
        <div className='md:w-9/12'>
            <h1>{stage.title}</h1>
        </div>
        <div className='flex md:w-6/12 '>
            <div className="m-2 md:w-3/12 w-full">
                <span className="text-xs font-bold">
                    {stage.subTitle}
                </span>            
            </div>
            <div className="md:m-4 flex md:w-6/12 w-full">
                
                <StatusCheckBar currentIndex= {stage.index}stages={[
                    0,
                    1,
                    2,
                    3
                ]}/>
            </div>   
        </div>
    </div>

    )
}