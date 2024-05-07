import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import useTranslation from 'next-translate/useTranslation';

export default function HelpBubble(props: any) {
  const { t, lang } = useTranslation('common');

  return (
    <div>
      <div className="w-full rounded-md border border-gray-200 md:flex-auto">
        <div className="flex rounded-xl bg-white p-4 shadow-sm">
          <div className="m-1 w-16">
            <QuestionMarkCircleIcon className="color-blue-dark h-6 w-6 rounded bg-gray-200 " />
          </div>

          <div className="flex w-64 flex-col">
            <h3 className="text-sm font-bold">{t('h_need_help_title')}</h3>
            <p className="text-xs leading-5">{t('p_need_help_body')}</p>
            <br />
            <a className="color-blue-dark text-xs font-bold">Contact us</a>
            <br />
            <a className="color-blue-dark text-xs font-bold">
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
