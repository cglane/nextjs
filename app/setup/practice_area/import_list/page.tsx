
import useTranslation from 'next-translate/useTranslation'
import LandingView from '@/app/ui/setup/practice_area/landing_view';
import { MainWrapper } from '@/app/ui/setup/basic_elements';
import { getNextPath, getLastPath } from '@/app/lib/utils';

// Page functions as for gathering data from api/db and doing server side rendering
export default  function Page() {     
  const { t, lang } = useTranslation('progress')
  // Temp 
  let nextPathName = getNextPath("/setup/practice_area/import_list")
  let lastPathName = getLastPath("/setup/practice_area/import_list")
    return (
      <MainWrapper>
        <LandingView lastPathName = {lastPathName} 
                      nextPathName = {nextPathName}
                      header = {"Import List"} 
                      description={"Import List Placeholder"} 
                      buttonBack={t('button_back')} 
                      buttonNext="Next" />
      </MainWrapper>

  );
}