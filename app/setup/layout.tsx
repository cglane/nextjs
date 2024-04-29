

import HeadNav from '../ui/progress/headnav';
import { getSession } from "@/auth";
// import LeftColumn from '../ui/setup/left_column';
// import HelpBubble from '../ui/help_bubble';
import ProgressHeader from '../ui/setup/progress_header';

import dynamic from 'next/dynamic'
import { FaceSmileIcon } from '@heroicons/react/24/outline';
 
// This fixes issue where there is a disconnect between server and client rendering
const LeftColumn = dynamic(() => import('../ui/setup/left_column'), { ssr: false })
const HelpBubble = dynamic(() => import('../ui/help_bubble'), { ssr: true })


export default function Layout({ children }: { children: React.ReactNode }) {
  const session = getSession()

  return (
      <div className="md:overflow-hidden">          
          <HeadNav session={session}/>
          <div>
            <div className='md:flex w-full md:h-screen'>
                <div className="md:flex-none md:block md:w-2/12 md:border-2 w-full">
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