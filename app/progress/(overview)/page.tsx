import LeftColumn from '@/app/ui/progress/left-column'
import RightColumn from '@/app/ui/progress/right-column'
export default function Page() {
    return (
      <div className='md:flex top-8 absolute w-full md:overflow-y-auto px-8 md:px-24 py-12'>
        <div className="md:flex-auto md:w-32 w-full">
          <LeftColumn/>
        </div>
        <div className="md:flex-auto w-64">
            <RightColumn/>
        </div>
      </div>
    )
  }