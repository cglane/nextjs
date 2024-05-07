import { SparklesIcon } from '@heroicons/react/24/outline';

// TODO: Convert to use i18n
export function AiSpan() {
  return (
    <div className="w-flex flex h-6 items-center justify-center rounded-md border border-yellow-100 bg-yellow-100 px-2 py-3 text-yellow-700">
      <SparklesIcon className="mx-2 h-4 w-4" />
      <span className="text-xs font-semibold ">Recommended by CaseyAI</span>
    </div>
  );
}
