
 import HeadNav from '../ui/progress/headnav';
import { getSession } from "@/auth";
import { lust } from '@/app/ui/fonts';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function Layout({ children }: { children: React.ReactNode }) {
  const session = getSession()

  return (
      <div className="md:overflow-hidden">          
          <HeadNav session={session}/>
            {children} 
      </div>



  );
}