import { SparklesIcon } from '@heroicons/react/24/outline';

// TODO: Convert to use i18n
export function AiSpan() {
    return (
      <div className='flex bg-yellow-100 rounded-md border border-yellow-100 w-flex h-6 items-center justify-center py-3 px-2 text-yellow-700'>    
        <SparklesIcon className='h-4 w-4 mx-2'/>
        <span className='font-semibold text-xs '>Recommended by CaseyAI</span>
      </div>
    );
  }