import LeftColumn from '@/app/ui/base/left_column';
import RightColumn from '@/app/ui/base/right_column';
import HeadNav from '@/app/ui/base/headnav';
import { getSession } from '@/auth';

export default function Page() {
  const session = getSession();

  return (
    <div>
      <HeadNav session={session} />
      <div className="max-w-96 overflow-hidden">
        <hr></hr>
      </div>
      <div className="bg-blue-dark h-60 md:overflow-hidden"></div>

      <div className="absolute top-16 w-full px-8 py-12 md:flex md:overflow-y-auto md:px-24">
        <div className="md:max-w-4 w-full md:w-5/12 md:flex-none md:px-8">
          <LeftColumn />
        </div>
        <div className="md:flex-auto md:px-8">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}
