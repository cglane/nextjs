// import { useRouter } from 'next/navigation'
import useTranslation from 'next-translate/useTranslation'
import LandingView from '@/app/ui/setup/practice_area/landing_view';

// Page functions as for gathering data from api/db and doing server side rendering
export default  function Page() {     
  // TODO: Add props for bottom nav forward and backwards
  const { t, lang } = useTranslation('progress')
 

    return (
    <main className='md:m-5 rounded-md border border-gray-200 h-screen'>
      <LandingView header = {t('h_setup_pa_title')} description={t('p_setup_pa_body')} buttonBack={t('button_back')} buttonNext={t('button_next_integration', {integration: 'Filevine'})} />
      {/* <div className="w-12/12 h-3/6 md:h-auto bg-white rounded-md  md:p-20 items-center justify-center">
        <div className="flex items-center justify-center">
          <WrenchIcon className='w-10 h-10'/>
        </div>
        <br/>
        <h1 className='text-sky-950 font-bold text-base'>{t('h_setup_pa_title')}</h1>
        <p className='text-xs leading-4 p-1'>{t('p_setup_pa_body')}</p>
        <br/>
        <br/>
        <h1>Placeholder for Video...</h1> 

      </div>
        <BottomNavigation buttonBack={t('button_back')}
          buttonNext={t('button_next_integration', {integration: 'Filevine'})} 
          /> */}
    </main>
  );
}