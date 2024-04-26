
import HeadNav from '../ui/progress/headnav';
import { getSession } from "@/auth";
import RightColumn from '../ui/setup/right-column';
import LeftColumn from '../ui/setup/left-column';

export default function Layout({ children }: { children: React.ReactNode }) {
  const session = getSession()

  return (
      <div className="md:overflow-hidden">          
          <HeadNav session={session}/>
          <div>
            <div className='flex w-full h-screen '>
                <div className="md:flex-none hidden md:block md:w-64 rounded-xl bg-gray-200 p-2 shadow-sm">
                    <LeftColumn/>
                </div>                
                <div className="md:flex-auto hidden md:block md:w-64">
                    {children} 
                </div>
                <div className="md:flex-none hidden md:block md:w-64">
                <RightColumn/>
                </div>
            </div>
          </div>

      </div>



  );
}