import {
    CheckIcon
  } from '@heroicons/react/24/outline';
//   import { fetchCardData  } from '@/app/lib/data';
//   const iconMap = {
//     collected: BanknotesIcon,
//     customers: UserGroupIcon,
//     pending: ClockIcon,
//     invoices: InboxIcon,
//   };
export function ActionCard({
    title,
    progress,
    description,
    link,
    type,
  }: {
    title: string;
    progress: number | string;
    description: string;
    link: string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
  }) {
    // const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <CheckIcon className="h-8 w-8 text-green-700 bg-green-100" />
          <div className='md:w-9/12 w-full md:px-3'>
            <h3 className="ml-2 text-extrabold font-semibold w-full">{title}</h3>
            <br  ></br>
            <p className="ml-2 text-xs text-gray-600 w-full">{description}</p>
          </div>
          <div className='md:w-2/12 w-full justify-center'>
            <div>
                <progress className="w-full bg-" value={progress}/>
            </div>
            <div className="w-full text-center">
                {
                    progress == 1? <span className='text-xs'>Complete!</span>: ''
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