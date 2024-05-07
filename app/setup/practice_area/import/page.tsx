import useTranslation from 'next-translate/useTranslation';
import LandingView from '@/app/ui/setup/practice_area/landing_view';
import { MainWrapper } from '@/app/ui/setup/basic_elements';
import Link from 'next/link';
import { getNextPath, getLastPath } from '@/app/lib/utils';

// Page functions as for gathering data from api/db and doing server side rendering
export default function Page() {
  const { t, lang } = useTranslation('progress');
  // Temp
  let nextPathName = getNextPath('/setup/practice_area/import');
  let lastPathName = getLastPath('/setup/practice_area/import');
  return (
    <MainWrapper>
      <LandingView
        lastPathName={lastPathName}
        nextPathName={nextPathName}
        header={'Import'}
        description={'Import Description Placeholder'}
        buttonBack={t('button_back')}
        buttonNext="Next"
      />

      <br></br>
      <h1>TEMPORARY</h1>
      <br></br>
      <Link
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        href="/setup/practice_area/126eed9c-c90c-4ef6-a4a8-fcf7408d3c66/edit/mappings"
      >
        Click to Go to a PA
      </Link>
    </MainWrapper>
  );
}
