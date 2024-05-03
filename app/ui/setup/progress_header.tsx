// import useTranslation from 'next-translate/useTranslation'
"use client"
import { useStageStore } from "@/stores/stage";
import StatusCheckBar from "./status_check_bar";
export default function ProgressHeader(props:any) {
    // const { t, lang } = useTranslation('progress')
    const { stage} = useStageStore();
    // Should we use store everywhere or just in the parent element?
    return (
        <div className='md:flex p-4'> 
            <div className='md:w-9/12 font-semibold text-xs text-center md:text-left'>
                <h1>{stage.title}</h1>
            </div>
        <div className='flex md:w-6/12 '>
            <div className="md:w-6/12 w-9/12">
                <span className="text-xs font-semibold">
                    {stage.subTitle}
                </span>            
            </div>
            <div className="flex md:w-6/12 w-3/12">
                
                <StatusCheckBar currentIndex= {stage.index} stages={[
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