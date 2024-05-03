
"use client"
import { useStageStore } from "@/stores/stage";
import { useRouter } from 'next/navigation'
import useTranslation from 'next-translate/useTranslation'
import { updateProgress } from "@/app/lib/actions";

export default  function Page() {     

  const router = useRouter()
  const { t, lang } = useTranslation('progress')

  const {replace} = useStageStore();
  const handleClickListener = async () => {
    console.log('handle click listener')
    let nextPathName = "/setup/practice_area/import"
    await updateProgress('1', nextPathName)

    replace({"title": "PA Import", "index": 1, "subTitle": "hello title"})
    router.push(nextPathName)
  };
    return (
    <main>
          <button onClick={handleClickListener}className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
>
            Move on to The Next Module
      </button>  
      <h1>
      </h1>
    </main>
  );
}