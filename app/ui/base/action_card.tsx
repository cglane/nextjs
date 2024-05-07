import { CheckIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export function ActionCard({
  title,
  progress,
  description,
  link,
  index,
}: {
  title: string;
  progress: number | string;
  description: string;
  link: string;
  index: number;
}) {
  const { t, lang } = useTranslation('progress');

  return (
    <div className="rounded-xl bg-white p-2 shadow-sm">
      <div className="md:flex md:p-4">
        {progress == 1 ? (
          <CheckIcon className="hidden h-5 w-5 bg-green-50 text-green-400 md:block " />
        ) : (
          <span className="hidden h-9 w-9 rounded-md bg-gray-200 py-2 text-center align-middle md:block">
            {index}
          </span>
        )}

        <div className="w-full text-center md:w-9/12 md:px-5 md:text-left">
          <h3 className="text-extrabold w-full font-semibold">{title}</h3>
          <p className="mb-4 w-full text-xs text-gray-500 md:py-1">
            {description}
          </p>
          {progress != 0 ? (
            <Link
              href={link}
              className="font:medium items-center self-start rounded-md px-2 py-2 text-xs text-xs outline outline-1 outline-offset-0 outline-gray-300"
            >
              <span>{t('span_view_edit')}</span>
            </Link>
          ) : (
            <Link
              href={link}
              className="items-center self-start rounded-md bg-indigo-950 px-2 py-2 text-xs text-xs font-medium text-white"
            >
              <span>{t('span_get_started')}</span>
            </Link>
          )}
        </div>
        <div className="my-6 w-full justify-center md:my-0 md:w-2/12">
          <div>
            <progress className="h-2 w-full opacity-70" value={progress} />
          </div>
          <div className="w-full text-center">
            {progress == 1 ? (
              <span className="text-xs">{t('span_progress_complete')}</span>
            ) : (
              <span className="text-xs">
                {t('span_progress_steps', { steps: 2 })}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* <p
          className={`
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p> */}
    </div>
  );
}
