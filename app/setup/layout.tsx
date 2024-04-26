
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