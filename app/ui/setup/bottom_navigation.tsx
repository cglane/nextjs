'use client';

import useTranslation from 'next-translate/useTranslation';
import { useStageStore } from '@/stores/stage';
import { updateProgress } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';

export default function BottomNavigation(props: any) {
  // const router = useRouter()

  // const handleClickListener = async () => {
  //     // let nextPathName = "/setup/practice_area/import"
  //     await updateProgress('1', props.nextPathName)
  //     router.push(props.nextPathName)
  // };
  // const goBackClickListener  = async () => {
  //     // let nextPathName = "/setup/practice_area/import"
  //     await updateProgress('1', props.lastPathName)
  //     router.push(props.lastPathName)
  // };
  return (
    <div className="flex h-3/6 w-full bg-slate-100 ">
      <div className=" m-6  w-9/12">
        <button
          onClick={props.goBackClickListener}
          className="mt-4 rounded-md border-2 bg-white px-4 py-3 text-xs font-medium text-black transition-colors hover:bg-blue-400"
        >
          <span className="p-4">&#60;</span>
          {props.buttonBack}
        </button>
      </div>
      <div className="m-6 w-6/12 md:w-4/12">
        <button
          onClick={props.handleClickListener}
          className="mt-4 rounded-md bg-sky-950 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-blue-400"
        >
          {props.buttonNext}
        </button>
      </div>
    </div>
  );
}
