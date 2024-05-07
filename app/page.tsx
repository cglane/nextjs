import LeftColumn from '@/app/ui/base/left_column'
import RightColumn from '@/app/ui/base/right_column'
import HeadNav from '@/app/ui/base/headnav';
import { getSession } from "@/auth";

export default function Page() {
    const session = getSession()

    return (
      <div>
        <HeadNav session={session}/>
        <div className='max-w-96 overflow-hidden'>
          <hr></hr>
        </div>
      <div  className='md:overflow-hidden bg-blue-dark h-60'></div>

      <div className='md:flex top-16 absolute w-full md:overflow-y-auto px-8 md:px-24 py-12'>
        
        <div className="md:flex-none md:w-5/12 md:max-w-4 w-full md:px-8">
          <LeftColumn/>
        </div>
        <div className="md:flex-auto md:px-8">
            <RightColumn/>
        </div>
      </div>

      </div>

    )
  }