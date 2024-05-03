// import { useRouter } from 'next/navigation'
import useTranslation from 'next-translate/useTranslation'
import { updateProgress } from "@/app/lib/actions";
import BottomNavigation from '@/app/ui/setup/bottom_navigation';
export default  function Page() {     
  const { t, lang } = useTranslation('progress')

    return (
    <main>
      <div className="w-full md:h-60 bg-white rounded-md">
        <h1>{t('h_setup_pa_title')}</h1>
        <p>{t('p_setup_pa_body')}</p>
      </div>
      <BottomNavigation buttonBack={t('button_back')}buttonNext={t('button_next_integration', {integration: 'Filevine'})} nextPathName="/setup/practice_area/import"/>
      <h1>
      </h1>
    </main>
  );
}