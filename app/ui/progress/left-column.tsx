"use client"
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation'

export default function LeftColumn(props:any) {
  const { t, lang } = useTranslation('progress')

    return (
    <div>
      <div className='md:flex-none text-white w-full'>
        <h2 className="font-bold text-xl p-1">{t('h_welcome_title')}</h2>                
        <p className='text-xs leading-4 p-1'>{t('p_welcome_body')}</p>
      </div>
      <br></br>
      {/* Help Block */}
      <div className='md:flex-auto w-full'>
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
            {/* <p
              className={`${lust.className}
                truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
          Hello                    
          </p> */}
          </div>
      </div>
    </div>
    )
}