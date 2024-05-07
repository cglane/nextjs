"use client"
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation'
import HelpBubble from '@/app/ui/help_bubble'

export default function LeftColumn(props:any) {
  const { t, lang } = useTranslation('progress')

    return (
    <div>
      <div className='md:flex-none text-white w-full'>
        <h2 className="font-bold text-xl p-1">{t('h_welcome_title')}</h2>                
        <p className='text-xs leading-4 p-1'>{t('p_welcome_body')}</p>
      </div>
      <br></br>
      <HelpBubble/>
    </div>
    )
}