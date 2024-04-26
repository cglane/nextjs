
import HeadNav from '../ui/progress/headnav';
import { getSession } from "@/auth";
import LeftColumn from '../ui/setup/left_column';
import HelpBubble from '../ui/help_bubble';
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
                    <div className='md:flex'> 
                        <div className='w-6/12'>
                            <h1>Practice Area Configuration</h1>
                        </div>
                        <div className='w-6/12 text-right'>
                            <span>Hello</span>
                        </div>
                    </div>
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