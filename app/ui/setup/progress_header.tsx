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
        <div className='md_w-6/12'>
            <h1>{stage.title}</h1>
        </div>
        <div className='md:w-6/12 text-right'>
            <div>
                <span>
                    {stage.subTitle}
                </span>            
            </div>
            <div className="md:w-2/12">
                <StatusCheckBar/>
            </div>   
        </div>
    </div>

    )
}