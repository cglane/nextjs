import useTranslation from 'next-translate/useTranslation'
import LandingView from '@/app/ui/setup/practice_area/landing_view';
import { MainWrapper } from '@/app/ui/setup/basic_elements';
import { fetchProgress } from '@/app/lib/data';
// Page functions as for gathering data from api/db and doing server side rendering
export default  function Page() {     
  // TODO: Add props for bottom nav forward and backwards
  const { t, lang } = useTranslation('progress')
  // Temp 
  const nextPathName = "/setup/practice_area/import"
  const lastPathName = "/progress"
    return (
      <MainWrapper>
        <LandingView lastPathName = {lastPathName} nextPathName = {nextPathName}header = {t('h_setup_pa_title')} description={t('p_setup_pa_body')} buttonBack={t('button_back')} buttonNext={t('button_next_integration', {integration: 'Filevine'})} />
      </MainWrapper>

  );
}