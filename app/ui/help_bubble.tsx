"use client"
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation'

export default function HelpBubble(props:any) {
    const { t, lang } = useTranslation('progress')

    return (
        <div>
        <div className='md:flex-auto w-full md:rounded:sm'>
            <div className="flex rounded-xl bg-white shadow-sm p-4">
              <div className="w-16 m-1">                     
                 <QuestionMarkCircleIcon className="h-6 w-6 color-blue-dark bg-gray-200 rounded " />
              </div>
              
              <div className="flex flex-col w-64">
                <h3 className="text-sm font-bold">{t('h_need_help_title')}</h3>
                <p className='text-xs leading-5'>{t('p_need_help_body')}</p>
                <br/>
                <a className='text-xs color-blue-dark font-bold'>Contact us</a>
                <br/>
                <a className='text-xs color-blue-dark font-bold'>Visit Help Center</a>
  
              </div>
            </div>
        </div>
      </div>

    )
}