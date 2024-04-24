import LeftColumn from '@/app/ui/progress/left-column'
import RightColumn from '@/app/ui/progress/right-column'
export default function Page() {
    return (
      <div className='md:flex top-16 absolute w-full md:overflow-y-auto px-8 md:px-24 py-12'>
        <div className="md:flex-none md:w-5/12 md:max-w-4 w-full md:px-8">
          <LeftColumn/>
        </div>
        <div className="md:flex-auto md:px-8">
            <RightColumn/>
        </div>
      </div>
    )
  }