
 import HeadNav from '../ui/progress/headnav';
import { getSession } from "@/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const session = getSession()
  return (
      <div className=" md:overflow-hidden">
          <HeadNav session={session}/>
          <hr  className=""></hr>
          <div className='flex flex-col'>
            <div  className='md:overflow-hidden bg-blue-dark h-60'></div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
          </div>

      </div>


  );
}