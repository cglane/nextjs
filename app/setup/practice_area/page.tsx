import useTranslation from 'next-translate/useTranslation'
import LandingView from '@/app/ui/setup/practice_area/landing_view';
import MainWrapper from '@/app/ui/setup/main_wrapper';
// Page functions as for gathering data from api/db and doing server side rendering
export default  function Page() {     
  // TODO: Add props for bottom nav forward and backwards
  const { t, lang } = useTranslation('progress')
    return (
      <MainWrapper>
        <LandingView header = {t('h_setup_pa_title')} description={t('p_setup_pa_body')} buttonBack={t('button_back')} buttonNext={t('button_next_integration', {integration: 'Filevine'})} />
      </MainWrapper>
    // <main className='md:m-5 rounded-md border border-gray-200 h-screen'>
    //   <LandingView header = {t('h_setup_pa_title')} description={t('p_setup_pa_body')} buttonBack={t('button_back')} buttonNext={t('button_next_integration', {integration: 'Filevine'})} />
    // </main>
  );
}