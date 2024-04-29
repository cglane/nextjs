// import useTranslation from 'next-translate/useTranslation'
"use client"
import { useStageStore } from "@/stores/stage";

export default function ProgressHeader(props:any) {
    // const { t, lang } = useTranslation('progress')
    const { stage} = useStageStore();

    return (
        <div className='md:flex'> 
        <div className='w-6/12'>
            <h1>Practice Area Configuration {stage.title}</h1>
        </div>
        <div className='w-6/12 text-right'>
            <span>Hello</span>
        </div>
    </div>

    )
}