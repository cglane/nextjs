'use client';
import BottomNavigation from '@/app/ui/setup/bottom_navigation';
import { WrenchIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { updateProgress } from '@/app/lib/actions';
import { MainDescription, MainHeader } from '../basic_elements';

export default function LandingView(props: any) {
  // TODO: Add props for bottom nav forward and backwards
  const router = useRouter();

  const handleClickListener = async () => {
    await updateProgress('1', props.nextPathName);
    router.push(props.nextPathName);
  };
  const goBackClickListener = async () => {
    await updateProgress('1', props.lastPathName);
    router.push(props.lastPathName);
  };

  return (
    <div>
      <div className="w-12/12 h-3/6 items-center justify-center rounded-md bg-white p-12 md:h-auto">
        <div className="flex items-center justify-center">
          <WrenchIcon className="h-10 w-10" />
        </div>
        <br />
        <MainHeader>{props.header}</MainHeader>
        <MainDescription>{props.description}</MainDescription>
        <br />
        <br />
        <h1>Placeholder for Video...</h1>
      </div>
      <BottomNavigation
        buttonBack={props.buttonBack}
        buttonNext={props.buttonNext}
        goBackClickListener={goBackClickListener}
        handleClickListener={handleClickListener}
      />
    </div>
  );
}
