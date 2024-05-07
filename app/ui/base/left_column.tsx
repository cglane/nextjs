'use client';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';
import HelpBubble from '@/app/ui/help_bubble';

export default function LeftColumn(props: any) {
  const { t, lang } = useTranslation('progress');

  return (
    <div>
      <div className="w-full text-white md:flex-none">
        <h2 className="p-1 text-xl font-bold">{t('h_welcome_title')}</h2>
        <p className="p-1 text-xs leading-4">{t('p_welcome_body')}</p>
      </div>
      <br></br>
      <HelpBubble />
    </div>
  );
}
