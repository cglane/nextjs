import HeadNav from '../ui/base/headnav';
import { getSession } from '@/auth';
import ProgressHeader from '../ui/setup/progress_header';

import dynamic from 'next/dynamic';

// This fixes issue where there is a disconnect between server and client rendering
const LeftColumn = dynamic(() => import('../ui/setup/left_column'), {
  ssr: true,
});
const HelpBubble = dynamic(() => import('../ui/help_bubble'), { ssr: true });

//   const localProgress = await fetchProgress('1')

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getSession();

  return (
    <div className="md:overflow-hidden">
      <HeadNav session={session} />
      <div>
        <div className="w-full md:flex md:h-screen">
          <div className="hidden w-full rounded-md border border-gray-200 md:block md:w-2/12 md:flex-none md:p-4">
            <LeftColumn />
          </div>
          <div className="w-full md:block md:flex-auto">
            <ProgressHeader />
            {children}
          </div>
          <div className="md:mt-0 md:block md:w-3/12 md:flex-none md:p-4 ">
            <HelpBubble />
          </div>
        </div>
      </div>
    </div>
  );
}
