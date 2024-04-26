import {
    CheckIcon,    
  } from '@heroicons/react/24/outline';

import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'

export function ActionCard({
    title,
    progress,
    description,    
    link,
    index

  }: {
    title: string;
    progress: number | string;
    description: string;
    link: string;
    index:number

  }) {
    const { t, lang } = useTranslation('progress')

    return (
      <div className="rounded-xl bg-white p-2 shadow-sm">
        <div className="md:flex md:p-4">
          {
            progress == 1?
            <CheckIcon className="w-5 h-5 text-green-400 bg-green-50 hidden md:block " />:
             <span className="w-9 h-9 hidden md:block rounded-md bg-gray-200 py-2 text-center align-middle">{index}</span>
          }
          
          <div className='md:w-9/12 w-full md:px-5 text-center md:text-left'>
            <h3 className="text-extrabold font-semibold w-full">{title}</h3>            
            <p className="mb-4 text-xs text-gray-500 w-full md:py-1">{description}</p>
            {
                    progress != 0?             
                    <Link
                        href={link}
                        className="items-center self-start rounded-md px-2 py-2 text-xs text-xs font:medium outline outline-1 outline-offset-0 outline-gray-300"
                    >
                        <span>{t('span_view_edit')}</span> 
                    </Link>:             
                    <Link
                        href={link}
                        className="items-center self-start rounded-md px-2 py-2 text-xs text-xs font-medium bg-indigo-950 text-white"
                    >
                        <span>{t('span_get_started')}</span> 
                    </Link>
                }

          </div>
          <div className='my-6 md:my-0 md:w-2/12 w-full justify-center'>
            <div>
                <progress className="w-full h-2 opacity-70" value={progress}/>
            </div>
            <div className="w-full text-center">
                {
                    progress == 1? <span className='text-xs'>{t('span_progress_complete')}</span>: <span className='text-xs'>{t('span_progress_steps', {steps: 2})}</span>
                }
            </div>
            
        </div>
          
        </div>
        {/* <p
          className={`
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p> */}
      </div>
    );
  }