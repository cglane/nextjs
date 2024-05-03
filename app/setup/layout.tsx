

import HeadNav from '../ui/progress/headnav';
import { getSession } from "@/auth";
import ProgressHeader from '../ui/setup/progress_header';

import dynamic from 'next/dynamic'

// This fixes issue where there is a disconnect between server and client rendering
const LeftColumn = dynamic(() => import('../ui/setup/left_column'), { ssr: true })
const HelpBubble = dynamic(() => import('../ui/help_bubble'), { ssr: true })

//   const localProgress = await fetchProgress('1')


export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = getSession()

  return (
      <div className="md:overflow-hidden">          
          <HeadNav session={session}/>
          <div>
            <div className='md:flex w-full md:h-screen'>
                <div className="md:flex-none md:block md:w-2/12 md:border-2 w-full md:p-4">
                    <LeftColumn/>
                </div>                
                <div className="md:flex-auto md:block w-full">
                    <ProgressHeader/>
                    {children} 
                </div>
                <div className="md:flex-none md:block md:w-2/12 md:p-4">
                    <HelpBubble/>
                </div>
            </div>
          </div>

      </div>



  );
}